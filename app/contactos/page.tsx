import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactMethods = [
  {
    icon: Phone,
    title: 'Teléfono',
    details: ['+1 (555) 123-4567', '+1 (555) 765-4321'],
    description: 'Disponible 24/7 para emergencias'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@petrofox.com', 'ventas@petrofox.com'],
    description: 'Respuesta en menos de 2 horas'
  },
  {
    icon: MapPin,
    title: 'Oficina Principal',
    details: ['Av. Industrial 1234', 'Zona Logística Norte'],
    description: 'Lunes a Viernes: 8:00 - 18:00'
  },
  {
    icon: Clock,
    title: 'Horario de Atención',
    details: ['Lun - Vie: 8:00 - 18:00', 'Sáb: 8:00 - 14:00'],
    description: 'Emergencias disponibles 24/7'
  }
];

const offices = [
  {
    city: 'Sede Principal',
    address: 'Av. Industrial 1234, Zona Logística Norte',
    phone: '+1 (555) 123-4567',
    email: 'principal@petrofox.com',
    image: 'https://images.pexels.com/photos/1192601/pexels-photo-1192601.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
  },
  {
    city: 'Sucursal Norte',
    address: 'Carretera Norte Km 15, Parque Industrial',
    phone: '+1 (555) 234-5678',
    email: 'norte@petrofox.com',
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
  },
  {
    city: 'Sucursal Sur',
    address: 'Zona Franca Sur, Bodega 25',
    phone: '+1 (555) 345-6789',
    email: 'sur@petrofox.com',
    image: 'https://images.pexels.com/photos/1051747/pexels-photo-1051747.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
  }
];

export default function Contactos() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-green-700">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
            <p className="text-xl">Estamos aquí para atender todas tus consultas y necesidades</p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Medios de Contacto</h2>
            <p className="text-lg text-gray-600">Múltiples formas de conectarte con nosotros</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {method.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="font-semibold text-gray-800">{detail}</p>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Envíanos un Mensaje</h2>
              <p className="text-lg text-gray-600 mb-8">
                Complete el formulario y nos pondremos en contacto contigo en la brevedad posible.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Tu nombre completo"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Nombre de tu empresa"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="tu@email.com"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+1 (555) 123-4567"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Servicio
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                    <option>Selecciona un servicio</option>
                    <option>Transporte de Combustibles</option>
                    <option>Productos Químicos Industriales</option>
                    <option>Líquidos Alimentarios</option>
                    <option>Aceites y Lubricantes</option>
                    <option>Consulta General</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <Textarea 
                    placeholder="Describe tu consulta o necesidad..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg">
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-black mb-6">¿Por Qué Elegirnos?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-2 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Atención Personalizada</h3>
                    <p className="text-gray-600">Cada cliente recibe atención especializada según sus necesidades específicas.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Respuesta Rápida</h3>
                    <p className="text-gray-600">Nos comprometemos a responder todas las consultas en menos de 2 horas hábiles.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Soporte 24/7</h3>
                    <p className="text-gray-600">Disponibilidad completa para emergencias y consultas urgentes.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-orange-800">¿Necesitas una Cotización?</h3>
                <p className="text-orange-700 mb-4">
                  Solicita una cotización personalizada y recibe una propuesta detallada en menos de 24 horas.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Solicitar Cotización
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Nuestras Oficinas</h2>
            <p className="text-lg text-gray-600">Presencia estratégica para mejor cobertura</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={office.image} 
                  alt={office.city}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl text-center">{office.city}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                    <p className="text-gray-600 text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-500" />
                    <p className="text-gray-800 font-medium">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-orange-500" />
                    <p className="text-gray-800 font-medium">{office.email}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-800 mb-4">Contacto de Emergencia</h2>
            <p className="text-lg text-red-700 mb-6">
              Para situaciones de emergencia durante el transporte, contáctanos inmediatamente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-red-500 text-white p-4 rounded-lg">
                <Phone className="h-6 w-6 inline mr-2" />
                <span className="text-xl font-bold">+1 (555) 911-EMER</span>
              </div>
              <div className="bg-red-500 text-white p-4 rounded-lg">
                <Mail className="h-6 w-6 inline mr-2" />
                <span className="text-xl font-bold">emergencias@petrofox.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}