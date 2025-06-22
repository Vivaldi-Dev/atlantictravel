'use client'
import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const slides = [
  { title: 'Pacotes turísticos personalizados', image: '/slider1.jpg', id: 'pacotes' },
  { title: 'Serviço VIP a bordo', image: '/slider2.jpg', id: 'vip' },
  { title: 'Experiências completas', image: '/slider3.jpg', id: 'experiencias' },
  { title: 'Destinos exclusivos', image: '/slider4.jpg', id: 'destinos' },
]

const menuItems = [
  { icon: '/icons/Island.png', text: 'Pacotes turísticos\npersonalizados', id: 'pacotes' },
  { icon: '/icons/seguro.png', text: 'Serviço VIP\na bordo', id: 'vip' },
  { icon: '/icons/car.png', text: 'Experiências\ncompletas', id: 'experiencias' },
  { icon: '/icons/aviao.png', text: 'Destinos\nexclusivos', id: 'destinos' }
]

export default function PerfectCoverflowSlider() {
  const swiperRef = useRef<SwiperType | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [activeMenuItem, setActiveMenuItem] = useState('pacotes')

  const handleMenuItemClick = (itemId: string) => {
    const slideIndex = slides.findIndex(slide => slide.id === itemId)
    if (slideIndex !== -1 && swiperRef.current) {
      swiperRef.current.slideToLoop(slideIndex)
      setActiveMenuItem(itemId)
    }
  }

  const handleSlideChange = (swiper: SwiperType) => {
    const slideId = slides[swiper.realIndex]?.id
    if (slideId) {
      setActiveMenuItem(slideId)
    }
  }

  useEffect(() => {
    const middleIndex = Math.floor(slides.length / 2)
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(middleIndex)
      setActiveMenuItem(slides[middleIndex].id)
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="w-full py-8 bg-gradient-to-b from-[#fff] to-[#B2DEE1] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-[#0871B5]">Serviços em Destaque da Atlantic Travel</h2>

            <motion.div className="mt-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className={`flex items-center gap-3 mt-6 p-3 rounded-lg cursor-pointer transition-colors ${
                    activeMenuItem === item.id ? 'bg- text-[#0871B5]' : 'hover:bg-[#0871B5]/10'
                  }`}
                  whileHover={{ x: 5 }}
                  onClick={() => handleMenuItemClick(item.id)}>
                  <Image
                    src={item.icon}
                    alt="Ícone"
                    width={24}
                    height={24}
                    className={activeMenuItem === item.id ? 'invert' : ''}
                  />
                  <p className="font-semibold whitespace-pre-line">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative">
            <Swiper
              onSwiper={(swiper) => swiperRef.current = swiper}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              loop={true}
              spaceBetween={-155}
              coverflowEffect={{
                rotate: 0,
                stretch: -200,
                depth: 300,
                modifier: 2,
                slideShadows: false,
                scale: 0.85,
              }}
              modules={[EffectCoverflow, Navigation]}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              onSlideChange={handleSlideChange}
              className="!overflow-visible">
              {slides.map((slide, i) => (
                <SwiperSlide
                  key={i}
                  className="!w-[280px] !h-[380px] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ease-out">
                  <motion.div
                    className="relative w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <motion.h3
                        className="text-white text-lg font-bold mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}>
                        {slide.title}
                      </motion.h3>
                      <motion.button
                        className="ml-auto w-8 h-8 bg-[#FFF700] rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <FiArrowRight className="text-black text-base" />
                      </motion.button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            <motion.button
              className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-4 z-20 w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg"
              aria-label="Anterior"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <FiChevronLeft className="text-white text-xl" />
            </motion.button>

            <motion.button
              className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-4 z-20 w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg"
              aria-label="Próximo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <FiChevronRight className="text-white text-xl" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}