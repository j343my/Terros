import './globals.css';

export const metadata = {
  title: 'Mon Potager 🌿',
  description: 'Suivi de votre potager en bacs et jardinières',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b6d11',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
