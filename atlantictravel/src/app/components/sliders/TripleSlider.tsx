'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import { FiArrowRight } from 'react-icons/fi'

const slides = [
  { title: 'Pacotes turísticos personalizados', image: '/img1.jpg' },
  { title: 'Serviço VIP a bordo', image: '/img2.jpg' },
  { title: 'Experiências completas', image: '/img3.jpg' },
  { title: 'Destinos exclusivos', image: '/img4.jpg' },
]

export default function PerfectCoverflowSlider() {
  const swiperRef = useRef<any>(null)

  return (
    <div className="w-full py-16 bg-gradient-to-b from-[#B2DEE1] to-white relative">
      <div className="max-w-4xl mx-auto px-4"> 
        <Swiper
          ref={swiperRef}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 10, 
            stretch: -60, 
            depth: 100,  
            modifier: 1.5, 
            slideShadows: false,
            scale: 0.85, 
          }}
          modules={[EffectCoverflow, Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="!overflow-visible !py-10 !px-10" 
        >
          {slides.map((slide, i) => (
            <SwiperSlide
              key={i}
              className="!w-[280px] !h-[380px] md:!w-[320px] md:!h-[420px] 
                        rounded-xl overflow-hidden shadow-lg cursor-pointer
                        transition-all duration-300 ease-out"
            >
              <div 
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-3">{slide.title}</h3>
                  <button 
                    className="ml-auto w-10 h-10 bg-[#FFF700] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    onClick={(e) => {
                      e.stopPropagation()
                      console.log('Botão clicado no slide:', i)
                    }}
                  >
                    <FiArrowRight className="text-black text-lg" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões de navegação */}
        <div className="swiper-button-prev !text-[#0871B5] hover:!scale-125 !transition-transform !left-0"></div>
        <div className="swiper-button-next !text-[#0871B5] hover:!scale-125 !transition-transform !right-0"></div>
      </div>
    </div>
  )
}