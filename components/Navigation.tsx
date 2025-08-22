'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Truck, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/momento', label: 'Quiénes Somos' },
    { href: '/momento', label: 'Servicios' },
    { href: '/momento', label: 'Contactos' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="relative">
      <div className="bg-orange-500 w-full p-2 flex flex-col md:flex-row justify-center md:justify-around items-center text-white text-sm md:text-base">
        <div className="flex items-center mb-1 md:mb-0">
          <Phone size={16} className="mr-1" />
          <span>+591 77777777</span>
        </div>
        <div className="flex items-center mb-1 md:mb-0">
          <Mail size={16} className="mr-1" />
          <span>info@petrofox.com</span>
        </div>
        <div className="flex items-center">
          <MapPin size={16} className="mr-1" />
          <span>La Paz, Bolivia</span>
        </div>
      </div>

      {/* Navegación principal */}
      <nav className={cn(
        "bg-white shadow-lg border-b-4 border-orange-500 transition-all duration-300",
        isScrolled ? "py-1" : "py-3"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/logo.png" 
                alt="Petrofox" 
                className="h-10 md:h-12 w-auto transition-all duration-300" 
              />
            </div>
            
            {/* Menú desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group",
                      pathname === item.href
                        ? "text-orange-600 font-semibold"
                        : "text-gray-700 hover:text-orange-600"
                    )}
                  >
                    {item.label}
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full",
                      pathname === item.href ? "w-full" : ""
                    )}></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Botón móvil */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menú principal</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200",
                  pathname === item.href
                    ? "bg-orange-100 text-orange-700 border-l-4 border-orange-500"
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-700"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
