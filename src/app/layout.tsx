import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

var testHusky = 'test husky';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Notes Manager',
  description: 'Manage your notes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
