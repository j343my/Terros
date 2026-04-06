// Generates simple SVG-based icons written as PNG placeholders
// Run: node scripts/gen-icons.mjs
import { writeFileSync } from 'fs';

function svgIcon(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${size * 0.18}" fill="#3b6d11"/>
  <text x="50%" y="54%" font-size="${size * 0.55}" text-anchor="middle" dominant-baseline="middle" font-family="Apple Color Emoji,Segoe UI Emoji,sans-serif">🌿</text>
</svg>`;
}

// For PWA we need actual PNG but we can serve SVG as PNG substitute
// Write SVG files that browsers will accept
writeFileSync('public/icon-192.png', svgIcon(192));
writeFileSync('public/icon-512.png', svgIcon(512));
console.log('Icons generated.');
