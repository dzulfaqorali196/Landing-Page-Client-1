import './globals.css';
import type { Metadata } from 'next';
import { pixelFont } from './fonts';

export const metadata: Metadata = {
  title: 'DOLOS - Ancient villain reborn',
  description: 'Experience the rebirth of an ancient villain in the digital age.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pixelFont.className}>{children}</body>
    </html>
  );
}