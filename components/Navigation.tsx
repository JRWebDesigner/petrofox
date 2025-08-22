'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/quienes-somos', label: 'Quiénes Somos' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/contactos', label: 'Contactos' },
  ];

  return (
    <header>
      <div  className="bg-orange-500 w-full p-2 flex justify-around items-center text-white text-lg">
        <span>+591 77777777</span>
        <span>info@petrofox.com</span>
        <span>La Paz, Bolivia</span>
      </div>

      <nav className="bg-white shadow-lg border-b-4 border-orange-500 p-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="/logo.png" width="300" />
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                      pathname === item.href
                        ? "bg-orange-500 text-white"
                        : "text-gray-700 hover:bg-orange-100 hover:text-orange-800"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 text-sm font-medium",
                      pathname === item.href
                        ? "text-orange-500"
                        : "text-gray-700"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
