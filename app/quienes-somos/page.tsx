import { Users, Award, Globe, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function QuienesSomos() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Quiénes Somos</h1>
            <p className="text-xl">Conoce la historia y valores que nos impulsan</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                PETROFOX nació con la visión de revolucionar el transporte de carga especializada 
                en el sector de combustibles y líquidos industriales. Desde nuestros inicios, 
                hemos mantenido un compromiso inquebrantable con la excelencia operativa y la seguridad.
              </p>
              <p className="text-gray-600 mb-4">
                Con más de una década de experiencia en el mercado, nos hemos consolidado como 
                una empresa líder en transporte de materiales peligrosos, siempre priorizando 
                la seguridad de nuestros colaboradores, clientes y el medio ambiente.
              </p>
              <p className="text-gray-600">
                Nuestro nombre "PETROFOX" combina la especialización en productos petroquímicos 
                con la astucia y agilidad del zorro, características que definen nuestro 
                enfoque estratégico en cada operación.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1051747/pexels-photo-1051747.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                alt="Historia de la empresa"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                alt="Crecimiento empresarial"
                className="w-full h-48 object-cover rounded-lg shadow-md mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Nuestros Valores</h2>
            <p className="text-lg text-gray-600">Los principios que guían cada una de nuestras acciones</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excelencia</h3>
                <p className="text-gray-600">Comprometidos con la calidad superior en cada servicio que brindamos.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integridad</h3>
                <p className="text-gray-600">Actuamos con transparencia y honestidad en todas nuestras relaciones.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustentabilidad</h3>
                <p className="text-gray-600">Cuidamos el medio ambiente implementando prácticas sostenibles.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovación</h3>
                <p className="text-gray-600">Adoptamos tecnologías avanzadas para optimizar nuestros servicios.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-black mb-6">Nuestra Misión</h2>
              <p className="text-lg text-gray-600 mb-8">
                Brindar servicios de transporte especializado de la más alta calidad, 
                garantizando la seguridad, puntualidad y confiabilidad que nuestros 
                clientes necesitan para el éxito de sus operaciones.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/1192601/pexels-photo-1192601.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" 
                  alt="Misión empresarial"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" 
                  alt="Compromiso con calidad"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-black mb-6">Nuestra Visión</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ser reconocidos como la empresa líder en transporte especializado a nivel nacional, 
                destacando por nuestra innovación tecnológica, compromiso ambiental y 
                excelencia en el servicio al cliente.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/1051747/pexels-photo-1051747.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" 
                  alt="Visión de futuro"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" 
                  alt="Liderazgo del mercado"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-gray-600">Profesionales altamente capacitados y comprometidos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" 
                alt="Equipo directivo"
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Dirección Ejecutiva</h3>
              <p className="text-gray-600">Liderazgo estratégico con visión de futuro y compromiso con la excelencia operativa.</p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" 
                alt="Conductores profesionales"
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Conductores Especializados</h3>
              <p className="text-gray-600">Personal altamente capacitado en manejo de materiales peligrosos y normativas de seguridad.</p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" 
                alt="Equipo técnico"
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Equipo Técnico</h3>
              <p className="text-gray-600">Especialistas en mantenimiento preventivo y tecnologías de monitoreo vehicular.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}