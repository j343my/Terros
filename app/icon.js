import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: 'linear-gradient(160deg, #A3B18A 0%, #6B8F5E 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Feuille stylisée en CSS */}
        <div style={{
          width: 14,
          height: 18,
          background: '#EDE0CC',
          borderRadius: '50% 0 50% 0',
          transform: 'rotate(-30deg)',
          position: 'relative',
        }} />
      </div>
    ),
    { ...size }
  );
}
