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
    if (photoCache[plantName]) { setPhotoUrl(photoCache[plantName]); return; }

    const title = WIKI_TITLES[plantName];
    if (!title) return;

    setLoading(true);
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`)
      .then(r => r.json())
      .then(data => {
        const src = data?.thumbnail?.source;
        if (src) {
          // Augmenter la résolution (remplace 320px par 500px dans l'URL Wikimedia)
          const hires = src.replace(/\/\d+px-/, '/500px-');
          photoCache[plantName] = hires;
          setPhotoUrl(hires);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [plantName]);

  return { photoUrl, loading };
}
