import './global.css';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import React from 'react';

export const metadata = {
  title: 'Yai Hacker News',
  description: 'Yet another hacker news clone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-full bg-base-100 text-slate-50 bg-gray-800">
        <Header />
        <main className="flex min-h-screen flex-col justify-between p-4 w-full max-w-5xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
