import { Outlet } from 'react-router';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import favicon from 'figma:asset/c58f5239cf458a4bc43f26460bc9fcc0aa42d58a.png';

export function Layout() {
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = favicon;
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
