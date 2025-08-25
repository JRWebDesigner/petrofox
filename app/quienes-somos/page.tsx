"use client"
import { Users, Award, Globe, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
//rossy te amo
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      type: "spring"
    }
  })
};

export default function QuienesSomos() {
  return (
    <motion.div
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
      }}
    >
      {/* Hero Section */}
      <motion.section
        className="relative h-96 bg-[url('/img7.webp')] bg-cover bg-fixed bg-center"
        variants={fadeInUp}
        custom={0}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Quiénes Somos</h1>
            <p className="text-xl">Conoce la historia y valores que nos impulsan</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Story */}
      <motion.section
        className="py-16 bg-white"
        variants={fadeInUp}
        custom={1}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.div variants={fadeInUp} custom={2}>
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
                Nuestro nombre PETROFOX combina la especialización en productos petroquímicos 
                con la astucia y agilidad del zorro, características que definen nuestro 
                enfoque estratégico en cada operación.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-16 bg-gray-50"
        variants={fadeInUp}
        custom={3}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">Nuestros Valores</h2>
            <p className="text-lg text-gray-600">Los principios que guían cada una de nuestras acciones</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-white" />,
                color: "bg-orange-500",
                title: "Excelencia",
                desc: "Comprometidos con la calidad superior en cada servicio que brindamos."
              },
              {
                icon: <Users className="h-8 w-8 text-white" />,
                color: "bg-blue-500",
                title: "Integridad",
                desc: "Actuamos con transparencia y honestidad en todas nuestras relaciones."
              },
              {
                icon: <Globe className="h-8 w-8 text-white" />,
                color: "bg-green-500",
                title: "Sustentabilidad",
                desc: "Cuidamos el medio ambiente implementando prácticas sostenibles."
              },
              {
                icon: <Truck className="h-8 w-8 text-white" />,
                color: "bg-red-500",
                title: "Innovación",
                desc: "Adoptamos tecnologías avanzadas para optimizar nuestros servicios."
              }
            ].map((val, i) => (
              <motion.div
                key={val.title}
                variants={fadeInUp}
                custom={i}
                whileHover={{ scale: 1.06, boxShadow: "0 8px 32px rgba(255, 115, 0, 0.10)" }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-6">
                    <motion.div
                      className={`${val.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                      whileHover={{ scale: 1.13, rotate: 8 }}
                    >
                      {val.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">{val.title}</h3>
                    <p className="text-gray-600">{val.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="py-16 bg-white"
        variants={fadeInUp}
        custom={4}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.div
              className="text-center lg:text-left"
              variants={fadeInUp}
              custom={0}
            >
              <h2 className="text-3xl font-bold text-black mb-6">Nuestra Misión</h2>
              <p className="text-lg text-gray-600 mb-8">
                Brindar servicios de transporte especializado de la más alta calidad, 
                garantizando la seguridad, puntualidad y confiabilidad que nuestros 
                clientes necesitan para el éxito de sus operaciones.
              </p>
            </motion.div>

            <motion.div
              className="text-center lg:text-left"
              variants={fadeInUp}
              custom={1}
            >
              <h2 className="text-3xl font-bold text-black mb-6">Nuestra Visión</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ser reconocidos como la empresa líder en transporte especializado a nivel nacional, 
                destacando por nuestra innovación tecnológica, compromiso ambiental y 
                excelencia en el servicio al cliente.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
