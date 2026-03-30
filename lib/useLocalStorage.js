'use client';
import { useState, useCallback } from 'react';

export function useLocalStorage(key, def) {
  const [v, setV] = useState(() => {
    if (typeof window === 'undefined') return def;
    try {
      const s = localStorage.getItem(key);
      return s ? JSON.parse(s) : def;
    } catch { return def; }
  });

  const save = useCallback(val => {
    const nv = typeof val === 'function' ? val(v) : val;
    setV(nv);
    try { localStorage.setItem(key, JSON.stringify(nv)); } catch {}
  }, [key, v]);

  return [v, save];
}
