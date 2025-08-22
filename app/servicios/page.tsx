import { Truck, Shield, Clock, MapPin, CheckCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    title: 'Transporte de Combustibles',
    description: 'Transporte especializado de gasolinas, diésel y otros combustibles líquidos con máximos estándares de seguridad.',
    features: ['Camiones cisterna certificados', 'Conductores especializados', 'Seguimiento GPS 24/7', 'Seguro total de carga'],
    image: 'https://images.pexels.com/photos/1192601/pexels-photo-1192601.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
  },
  {
    title: 'Productos Químicos Industriales',
    description: 'Manejo y transporte de productos químicos industriales cumpliendo todas las normativas internacionales.',
    features: ['Contenedores especializados', 'Personal certificado', 'Protocolos de emergencia', 'Documentación completa'],
    image: 'https://images.pexels.com/photos/1051747/pexels-photo-1051747.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
  },
  {
    title: 'Líquidos Alimentarios',
    description: 'Transporte de líquidos alimentarios manteniendo la cadena de frío y estándares sanitarios.',
    features: ['Cisterna sanitaria', 'Control de temperatura', 'Certificación HACCP', 'Trazabilidad completa'],
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
  },
  {
    title: 'Aceites y Lubricantes',
    description: 'Distribución especializada de aceites industriales, lubricantes y productos derivados del petróleo.',
    features: ['Manejo especializado', 'Prevención de contaminación', 'Entregas programadas', 'Control de inventarios'],
    image: 'https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
  }
];

const certifications = [
  'ISO 9001:2015 - Gestión de Calidad',
  'ISO 14001:2015 - Gestión Ambiental',
  'OHSAS 18001 - Seguridad y Salud Ocupacional',
  'ADR - Transporte de Mercancías Peligrosas',
  'Certificación IATA - Mercancías Peligrosas',
  'Registro Nacional de Transporte'
];

export default function Servicios() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-xl">Transporte especializado con la más alta calidad y seguridad</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Servicios Especializados</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una gama completa de servicios de transporte especializado, 
              adaptándonos a las necesidades específicas de cada cliente y tipo de carga.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Nuestro Proceso</h2>
            <p className="text-lg text-gray-600">Metodología probada para garantizar entregas exitosas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Planificación</h3>
              <p className="text-gray-600">Análisis de ruta, permisos y documentación necesaria</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2. Preparación</h3>
              <p className="text-gray-600">Inspección del vehículo y carga según protococolos</p>
            </div>

            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">3. Transporte</h3>
              <p className="text-gray-600">Monitoreo continuo y comunicación en tiempo real</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">4. Entrega</h3>
              <p className="text-gray-600">Descarga segura y documentación de entrega</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                <AlertTriangle className="inline-block h-8 w-8 text-orange-500 mr-3" />
                Estándares de Seguridad
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                La seguridad es nuestra prioridad número uno. Implementamos los más altos 
                estándares internacionales para el manejo de materiales peligrosos y 
                cargas especiales.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Equipos de Seguridad</h3>
                    <p className="text-gray-600">Extintores, equipos de emergencia y sistemas de contención de derrames</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Capacitación Continua</h3>
                    <p className="text-gray-600">Programas regulares de entrenamiento para todo nuestro personal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Monitoreo 24/7</h3>
                    <p className="text-gray-600">Seguimiento GPS y comunicación constante durante el transporte</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1192601/pexels-photo-1192601.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" 
                alt="Seguridad en transporte"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/1051747/pexels-photo-1051747.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" 
                alt="Equipos especializados"
                className="w-full h-48 object-cover rounded-lg shadow-md mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" 
                alt="Personal capacitado"
                className="w-full h-48 object-cover rounded-lg shadow-md -mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" 
                alt="Control de calidad"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Certificaciones y Licencias</h2>
            <p className="text-lg text-gray-600">Cumplimos con todas las normativas nacionales e internacionales</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="p-3 text-center justify-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas Alguno de Nuestros Servicios?
          </h2>
          <p className="text-xl text-white mb-8">
            Contáctanos para recibir una propuesta personalizada según tus necesidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Solicitar Cotización
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-lg font-semibold transition-colors">
              Ver Más Servicios
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}