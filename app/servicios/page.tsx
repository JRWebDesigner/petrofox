"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'motion/react';

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

const fadeInUp = {
	hidden: { opacity: 0, y: 40 },
	visible: (i = 1) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.12,
			duration: 0.7,
			type: "spring"
		}
	})
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
				custom={0}
			>
				<div className="absolute inset-0 bg-black bg-opacity-30"></div>
				<div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
					<div className="text-white">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
						<p className="text-xl">Transporte especializado con la más alta calidad y seguridad</p>
					</div>
				</div>
			</motion.section>

			{/* Services Overview */}
			<section className="py-16 ">
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
							<Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow max-h-[300px]">
								<div className="md:flex md:items-center md:h-full">
									<div className="md:w-1/2 md:h-full">
										<img
											src={service.image}
											alt={service.title}
											className="w-full h-64 md:h-full object-cover"
										/>
									</div>
									<div className="md:w-1/2 p-6">
										<CardHeader className="p-0 mb-4">
											<CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
										</CardHeader>
										<CardContent className="p-0">
											<p className="text-gray-600 mb-4">{service.description}</p>
											<div className="space-y-4">
												VER MAS
											</div>
										</CardContent>
									</div>
								</div>
							</Card>
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
					</div>
				</div>
			</section>
		</motion.div>
	);
}
