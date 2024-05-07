'use client';

import './globals.css';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton:wght@400;500;600;700&family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="
https://cdn.jsdelivr.net/npm/@dannymichel/proxima-nova@4.5.2/index.min.css
"
          rel="stylesheet"
        ></link>
      </head>
      <body className="overflow-x-hidden antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
