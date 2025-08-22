'use client';

import HeroCarousel from '@/components/index/HeroCarousel'
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Truck, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';


const features = [
  {
    icon: Shield,
    title: 'Seguridad Garantizada',
    description: 'Cumplimos con todos los estándares internacionales de seguridad en transporte de materiales peligrosos.'
  },
  {
    icon: Clock,
    title: 'Entregas Puntuales',
    description: 'Garantizamos entregas en tiempo y forma con seguimiento en tiempo real de cada envío.'
  },
  {
    icon: Truck,
    title: 'Flota Moderna',
    description: 'Camiones sisterna de última generación con tecnología avanzada y mantenimiento preventivo.'
  },
  {
    icon: Users,
    title: 'Personal Especializado',
    description: 'Conductores y personal técnico altamente capacitados y certificados en transporte especializado.'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="min-h-screen">
    
      <HeroCarousel />
      
      {/* Welcome Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Bienvenidos a <span className="text-orange-500">PETROFOX</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Somos líderes en transporte especializado de carga líquida con camiones sisterna. 
              Con años de experiencia y una flota moderna, garantizamos servicios seguros y confiables.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Nuestra Operación</h2>
            <p className="text-lg text-gray-600">Conoce de cerca nuestras operaciones y flota de camiones</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.pexels.com/photos/1192601/pexels-photo-1192601.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                alt="Camión sisterna en operación"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Camiones en Operación</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                alt="Centro logístico"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Centro Logístico</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                alt="Flota de camiones"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Nuestra Flota</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas Transporte Especializado?
          </h2>
          <p className="text-xl text-white mb-8">
            Contáctanos hoy mismo y obtén una cotización personalizada para tus necesidades
          </p>
          <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Solicitar Cotización
          </Button>
        </div>
      </section>
    </div>
  );
}
