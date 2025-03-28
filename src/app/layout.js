'use client';

import '../styles/globals.css'
import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import Navbar from "@/components/Navbar";
import { QuoteFormProvider } from '@/components/QuoteFormContext';
import { Analytics } from '@vercel/analytics/react';
import { AuthProvider } from '@/components/admin/AuthContext';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminOrStudioRoute = pathname?.startsWith('/admin') || pathname?.startsWith('/studio') || pathname?.startsWith('/login');

  return (
    <html lang="en">
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
        </style>
      </head>
      <body>
        <AuthProvider>
          {!isAdminOrStudioRoute ? (
            <QuoteFormProvider>
              <main>{children}</main>
              <Footer />
              <Analytics />
            </QuoteFormProvider>
          ) : (
            <>
              <main>{children}</main>
              <Analytics />
            </>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
