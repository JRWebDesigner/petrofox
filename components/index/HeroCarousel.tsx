"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const carouselItems = [
  {
    image: '/img1.jpeg',
    description: 'Especialistas en transporte seguro líquidos '
  },
  {
    image: '/img4.jpeg',
    description: 'Flota de camiones sisterna de última generación equipados'
  },
  {
    image: '/img7.jpeg',
    description: 'Servicios de logística integral con seguimiento en tiempo real '
  },
  {
    image: '/img8.jpeg',
    description: 'Amplia red de distribución que cubre todo el territorio nacional'
  }
];

export default function HeroCarousel(){
  return(
    <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="h-[500px]"
    >
      {carouselItems.map((item, index) => (
        <SwiperSlide key={index} className='relative h-full'>
            <img 
              src={item.image} 
              alt={item.description}
              className="absolute h-full w-full object-cover object-center z-10"
            />
            <div className="relative bg-black/30 h-full flex items-center justify-start z-20">
              <div className="text-white max-w-4xl px-8 text-shadow-lg">
                <h1 className="text-5xl font-black text-white text-shadow-[6px_30px_black]">Transporte y Logística <br/> de Carga en Bolivia</h1>
                <p className="text-xl md:text-2xl">{item.description}</p>
              </div>
            </div>
        </SwiperSlide>            
      ))}
    </Swiper>  
  )
}
