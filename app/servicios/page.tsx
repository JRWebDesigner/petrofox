"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Transporte Terrestre Internacional',
        description: 'Contenedores, vehiculos y cargas sueltas con rutas seguras y eficientes.',
        image: '/img8.webp'
    },
    {
        title: 'Transporte de Carga Especial',
        description: 'Maquinarias, equipos con sobrepeso y sobredimension.',
        image: '/img3.webp'
    },
    {
        title: 'Seguro de Carga',
        description: 'Servicio de seguro para proteger su mercadería durante el transporte.',
        image: '/img9.webp'
    },
    {
        title: 'Asesoramiento en Logística',
        description: 'Agilizacion de documentos para importación y exportación.',
        image: '/img8.webp'
    },
    {
        title: 'Consolidación de Carga',
        description: 'Optimización de envíos para reducir costos y mejorar tiempos de entrega.',
        image: '/img6.webp'
    },
    {
        title: 'Recojo de Mercaderia',
        description: 'Recogemos la mercaderia desde los depositos de su proveedor',
        image: '/img10.webp'
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

export default function Servicios() {
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
                className="relative h-96 bg-[url('/img8.webp')] bg-cover bg-fixed bg-center"
                variants={fadeInUp}
            >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
                    <motion.div
                        className="text-white"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
                        <p className="text-xl">Transporte especializado con la más alta calidad y seguridad</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Services Overview */}
            <section className="py-16 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-bold text-black mb-4">Servicios Especializados</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Ofrecemos una gama completa de servicios de transporte especializado,
                            adaptándonos a las necesidades específicas de cada cliente y tipo de carga.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(255,115,0,0.13)" }}
                                transition={{ type: "spring", stiffness: 250, delay: index * 0.1 }}
                            >
                                <Card className="overflow-hidden hover:shadow-xl transition-shadow max-h-[320px] bg-white group">
                                    <div className="md:flex md:items-center md:h-full">
                                        <motion.div
                                            className="md:w-1/2 md:h-full"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.7, type: "spring" }}
                                        >
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </motion.div>
                                        <div className="md:w-1/2 p-6">
                                            <CardHeader className="p-0 mb-4">
                                                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-0">
                                                <motion.p
                                                    className="text-gray-600 mb-4"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true, amount: 0.7 }}
                                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                                >
                                                    {service.description}
                                                </motion.p>
                                                <div className="space-y-4">
                                                    <motion.span
                                                        className="inline-block text-orange-500 font-semibold cursor-pointer hover:underline"
                                                        whileHover={{ scale: 1.08, color: "#ea580c" }}
                                                        transition={{ type: "spring", stiffness: 300 }}
                                                        initial={{ opacity: 0, x: 20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true, amount: 0.7 }}
                                                    >
                                                        VER MÁS
                                                    </motion.span>
                                                </div>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <motion.section
                className="py-16 bg-orange-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        ¿Necesitas Alguno de Nuestros Servicios?
                    </h2>
                    <p className="text-xl text-white mb-8">
                        Contáctanos para recibir una propuesta personalizada según tus necesidades
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Solicitar Cotización
                        </motion.button>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    );
}
