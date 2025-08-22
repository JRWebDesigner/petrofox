'use client';

import HeroCarousel from '@/components/index/HeroCarousel'
import { ChevronLeft, ChevronRight, Truck, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services=[
  {
    id:1,
    color:'red',
    image:'/img2.jpeg',
    title:'prueba',
    description:'lorem ipsum asdasfm ajkdnasl '
  },
  {
    id:2,
    color:'blue',
    image:'/img9.jpeg',
    title:'prueba',
    description:'lorem ipsum asdasfm ajkdnasl '
  },
  {
    id:3,
    color:'green',
    image:'/img6.jpeg',
    title:'prueba',
    description:'lorem ipsum asdasfm ajkdnasl '
  }
]
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
  return (
    <div className="min-h-screen">
    
      <HeroCarousel />

      {/* Features Section */}
      <section className="relative bg-orange-950">
        <div className="bg-[url(/img9.jpeg)] bg-fixed bg-norepeat bg-cover bg-center w-full h-full absolute opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-8">
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
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" mb-12">
            <h2 className="text-right text-4xl font-black mb-4 text-orange-700">Nuestros Servicios</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, id)=>(
              <div key={id} className={`relative overflow-hidden shadow-lg group bg-${service.color}-950`}>
              <img 
                src={service.image} 
                alt={service.title}
                className={`w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 opacity-40`}
              />
              <div className={`absolute inset-0 bg-opacity-40 hover:scale-110 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`}>
                <h2 className="text-white font-semibold text-2xl uppercase">{service.title}</h2>
              </div>
            </div>
            ))}
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
