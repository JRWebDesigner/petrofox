'use client';

import HeroCarousel from '@/components/index/HeroCarousel'
import { Truck, Shield, Clock, Users, PackageCheck, ShieldCheck, UserCheck, PackagePlus, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

// Paleta: azul oscuro, azul claro, naranja, blanco, gris suave
const services = [
  {
    id: 1,
    icon: Truck,
    color: "bg-gradient-to-t from-blue-900 to-orange-500",
    image: '/img2.webp',
    title: 'Transporte Nacional',
  },
  {
    id: 2,
    icon: PackageCheck,
    color: "bg-gradient-to-t from-blue-900 to-blue-400",
    image: '/img9.webp',
    title: 'Transporte Carga Especial',
  },
  {
    id: 3,
    icon: ShieldCheck,
    color: "bg-gradient-to-t from-blue-900 to-green-400",
    image: '/img6.webp',
    title: 'Seguro de Carga',
  },
  {
    id: 4,
    icon: UserCheck,
    color: "bg-gradient-to-t from-blue-900 to-violet-500",
    image: '/img11.webp',
    title: 'Asesoramiento',
  },
  {
    id: 5,
    icon: PackagePlus,
    color: "bg-gradient-to-t from-blue-900 to-orange-400",
    image: '/img8.webp',
    title: 'Consolidación de Cargas',
  },
  {
    id: 6,
    icon: MapPin,
    color: "bg-gradient-to-t from-blue-900 to-cyan-400",
    image: '/img10.webp',
    title: 'Monitoreo y Seguimiento',
  }
];

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
    description: 'Camiones cisterna de última generación con tecnología avanzada y mantenimiento preventivo.'
  },
  {
    icon: Users,
    title: 'Personal Especializado',
    description: 'Conductores y personal técnico altamente capacitados y certificados en transporte especializado.'
  }
];

// Variants solo con objetos (no funciones)
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, type: "spring" } 
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

export default function Home() {
  return (
    <motion.div
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.div variants={fadeInUp}>
        <HeroCarousel />
      </motion.div>

      {/* Features Section */}
      <section className="relative bg-blue-900">
        <div className="bg-[url(/img9.webp)] bg-fixed bg-cover bg-center w-full h-full absolute opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(30,41,59,0.18)" }}
                transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
              >
                <Card className="text-center bg-white/90 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl">
                  <CardContent className="p-6">
                    <motion.div
                      className="bg-gradient-to-br from-orange-400 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-900 group-hover:text-orange-500 transition-colors">{feature.title}</h3>
                    <p className="text-gray-700 group-hover:text-blue-900 transition-colors">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 ">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.13 } }
          }}
        >
          <motion.div
            className="mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-right text-4xl font-bold mb-4 text-orange-400 drop-shadow-lg">Nuestros servicios de logística</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, id) => (
              <motion.div
                key={id}
                className={`relative overflow-hidden shadow-xl group ${service.color} rounded-2xl border-2 border-white/10`}
                variants={fadeInUp}
                whileHover={{ scale: 1.04, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: id * 0.1 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 opacity-40"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, type: "spring" }}
                  whileHover={{ scale: 1.12, opacity: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                >
                  <service.icon className="h-16 w-16 text-white mb-2 group-hover:animate-bounce" />
                  <h2 className="text-white font-semibold text-xl uppercase text-center group-hover:text-orange-300 transition-colors">{service.title}</h2>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-end items-center bg-[url(/img3.webp)] bg-cover bg-center bg-fixed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          custom={0}
        >
          <motion.div
            className="bg-white/90 p-10 rounded-2xl text-center max-w-[600px] w-[90%] shadow-2xl border border-blue-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">¿Quiénes somos?</h2>
            <p className="text-lg text-blue-800 mb-6">
              Somos una empresa líder en logística y transporte, comprometida con la seguridad, puntualidad y excelencia en cada envío. Nuestro equipo altamente capacitado y nuestra flota moderna garantizan el mejor servicio para tus necesidades.
            </p>
            <motion.div whileHover={{ scale: 1.08 }}>
              <Button className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 text-lg font-semibold transition-all duration-300 shadow-lg">
                Conócenos
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>  
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          custom={0}
        >
          <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
            ¿Necesitas Transporte Especializado?
          </h2>
          <p className="text-xl text-white mb-8">
            Contáctanos hoy mismo y obtén una cotización personalizada para tus necesidades.
          </p>
          <motion.div whileHover={{ scale: 1.08 }}>
            <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-all duration-300 shadow-md">
              Solicitar Cotización
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}
