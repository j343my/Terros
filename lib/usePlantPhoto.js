'use client';
import { useState, useEffect } from 'react';
import { WIKI_TITLES } from './plantPhotos';

// Cache en mémoire pour éviter les appels répétés
const photoCache = {};

export function usePlantPhoto(plantName) {
  const [photoUrl, setPhotoUrl] = useState(() => photoCache[plantName] || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!plantName) return;
    let cancelled = false;

    if (photoCache[plantName]) {
      Promise.resolve().then(() => {
        if (!cancelled) setPhotoUrl(photoCache[plantName]);
      });
      return () => { cancelled = true; };
    }

    const getSummaryThumbnail = async (lang, title) => {
      const res = await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
      if (!res.ok) return null;
      const data = await res.json();
      return data?.thumbnail?.source || null;
    };

    const searchTitle = async (lang, query) => {
      const res = await fetch(`https://${lang}.wikipedia.org/w/rest.php/v1/search/title?q=${encodeURIComponent(query)}&limit=1`);
      if (!res.ok) return null;
      const data = await res.json();
      return data?.pages?.[0]?.title || null;
    };

    const loadPhoto = async () => {
      setLoading(true);
      try {
        // 1) Titre manuel prioritaire si défini
        const mappedTitle = WIKI_TITLES[plantName];
        if (mappedTitle) {
          const mappedThumb = await getSummaryThumbnail('en', mappedTitle);
          if (mappedThumb) {
            const hires = mappedThumb.replace(/\/\d+px-/, '/500px-');
            photoCache[plantName] = hires;
            if (!cancelled) setPhotoUrl(hires);
            return;
          }
        }

        // 2) Recherche auto FR puis EN pour couvrir toutes les plantes du référentiel
        const frTitle = await searchTitle('fr', plantName);
        if (frTitle) {
          const frThumb = await getSummaryThumbnail('fr', frTitle);
          if (frThumb) {
            const hires = frThumb.replace(/\/\d+px-/, '/500px-');
            photoCache[plantName] = hires;
            if (!cancelled) setPhotoUrl(hires);
            return;
          }
        }

        const enTitle = await searchTitle('en', plantName);
        if (enTitle) {
          const enThumb = await getSummaryThumbnail('en', enTitle);
          if (enThumb) {
            const hires = enThumb.replace(/\/\d+px-/, '/500px-');
            photoCache[plantName] = hires;
            if (!cancelled) setPhotoUrl(hires);
          }
        }
      } catch {
        // no-op: on garde l'emoji de fallback
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadPhoto();

    return () => {
      cancelled = true;
    };
  }, [plantName]);

  return { photoUrl, loading };
}
