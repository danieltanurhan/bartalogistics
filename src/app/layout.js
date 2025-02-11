'use client';

import '../styles/globals.css'
import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import Navbar from "@/components/Navbar";
import { QuoteFormProvider } from '@/components/QuoteFormContext';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith('/studio');

  return (
    <html lang="en">
      <head>
      <style>
        @import url('https://fonts.googleapis.com/cssfamily=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
      </style>
      </head>
      <body>
        {!isStudioRoute ? (
          <QuoteFormProvider>
            <main>{children}</main>
            <Footer />
          </QuoteFormProvider>
        ) : (
          <main>{children}</main>
        )}
      </body>
    </html>
  );
}
