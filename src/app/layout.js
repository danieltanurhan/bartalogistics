import '../styles/globals.css'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <head>
      <style>
        @import url('https://fonts.googleapis.com/cssfamily=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
      </style>
      </head>
      <body>
        {/* <Navbar /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
