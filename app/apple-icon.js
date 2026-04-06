import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 38,
          background: 'linear-gradient(160deg, #A3B18A 0%, #6B8F5E 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Graine stylisée */}
        <div style={{
          width: 70,
          height: 95,
          background: '#EDE0CC',
          borderRadius: '50% 50% 45% 45%',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
          {/* Tige */}
          <div style={{
            width: 5,
            height: 30,
            background: '#6B8F5E',
            borderRadius: 3,
            marginTop: -22,
          }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
