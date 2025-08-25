import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import { MessageCircleMore } from 'lucide-react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Petrofox - Transporte de Carga Especializado',
  description: 'Empresa líder en transporte de carga con camiones sisterna. Servicios confiables y seguros.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} min-h-screen relative`}
        style={{
          background: 'radial-gradient(circle at 80% 10%, #ffedd5 0%, #fff 60%)',
        }}
      >
        <Navigation />
        {children}
        <div className="fixed z-30 bottom-7 rounded-full right-6 p-3 bg-green-600 hover:scale-110">
          <MessageCircleMore className="w-9 h-9 text-white" />
        </div>
      </body>
    </html>
  );
}
