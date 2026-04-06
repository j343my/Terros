const WEATHER_CODE_ICON = {
  0: '☀️',
  1: '🌤️',
  2: '⛅',
  3: '☁️',
  45: '🌫️',
  48: '🌫️',
  51: '🌦️',
  53: '🌦️',
  55: '🌧️',
  61: '🌧️',
  63: '🌧️',
  65: '🌧️',
  66: '🌨️',
  67: '🌨️',
  71: '🌨️',
  73: '🌨️',
  75: '❄️',
  80: '🌧️',
  81: '🌧️',
  82: '⛈️',
  95: '⛈️',
};

function computeLevel(day) {
  let score = 0;
  const actions = [];

  if (day.rainMm >= 35 || day.rainProb >= 80) {
    score += 3;
    actions.push('renfort collecte');
  } else if (day.rainMm >= 20 || day.rainProb >= 65) {
    score += 2;
    actions.push('anticiper les tournées');
  }

  if (day.windGust >= 90) {
    score += 3;
    actions.push('sécuriser les bacs légers');
  } else if (day.windGust >= 70) {
    score += 2;
    actions.push('surveiller la stabilité');
  }

  if (day.tempMin <= 0) {
    score += 2;
    actions.push('protéger les plants sensibles');
  }

  if (day.tempMax >= 36) {
    score += 2;
    actions.push('prévoir un arrosage renforcé');
  } else if (day.tempMax >= 32) {
    score += 1;
    actions.push('contrôle hydrique');
  }

  if (score >= 4) return { level: 'rouge', actions };
  if (score >= 2) return { level: 'orange', actions };
  return { level: 'vert', actions };
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = (searchParams.get('city') || '').trim();
  const days = Math.min(Math.max(Number(searchParams.get('days') || 5), 1), 7);

  if (!city) {
    return Response.json({ error: 'city est requis' }, { status: 400 });
  }

  try {
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=fr&format=json`, {
      cache: 'no-store',
    });
    const geo = await geoRes.json();
    const place = geo?.results?.[0];

    if (!place) {
      return Response.json({ error: 'Ville introuvable' }, { status: 404 });
    }

    const forecastRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&timezone=auto&forecast_days=${days}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max`,
      { cache: 'no-store' }
    );
    const forecast = await forecastRes.json();
    const daily = forecast?.daily;

    if (!daily?.time?.length) {
      return Response.json({ error: 'Prévisions indisponibles' }, { status: 502 });
    }

    const parsedDays = daily.time.map((date, i) => {
      const base = {
        date,
        weatherCode: daily.weather_code?.[i] ?? -1,
        tempMax: daily.temperature_2m_max?.[i] ?? 0,
        tempMin: daily.temperature_2m_min?.[i] ?? 0,
        rainMm: daily.precipitation_sum?.[i] ?? 0,
        rainProb: daily.precipitation_probability_max?.[i] ?? 0,
        windGust: daily.wind_gusts_10m_max?.[i] ?? 0,
      };

      const { level, actions } = computeLevel(base);
      return {
        ...base,
        icon: WEATHER_CODE_ICON[base.weatherCode] || '🌤️',
        level,
        actions,
      };
    });

    const highest = parsedDays.find(d => d.level === 'rouge') || parsedDays.find(d => d.level === 'orange');

    return Response.json({
      city: `${place.name}${place.country ? `, ${place.country}` : ''}`,
      latitude: place.latitude,
      longitude: place.longitude,
      generatedAt: new Date().toISOString(),
      topAction: highest?.actions?.[0] || '',
      days: parsedDays,
    });
  } catch {
    return Response.json({ error: 'Erreur de récupération météo' }, { status: 502 });
  }
}
