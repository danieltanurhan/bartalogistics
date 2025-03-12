import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Barta Logistics - Coming Soon',
  description: 'Global logistics solutions provider - Website coming soon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center" 
             style={{ backgroundImage: "url('/images/background.jpg')" }}>
          {children}
        </div>
      </body>
    </html>
  );
}