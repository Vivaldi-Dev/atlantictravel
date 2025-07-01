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

type CategoryKey = 'pacotes' | 'vip' | 'experiencias' | 'destinos'

interface Category {
  title: string
  slides: Array<{
    title: string
    image: string
    id: string
  }>
  icon: string
}

const categoryData: Record<CategoryKey, Category> = {
  pacotes: {
    title: 'Pacotes turísticos personalizados',
    slides: [
      { title: 'Pacote Familiar', image: '/pacote1.jpg', id: 'pacote1' },
      { title: 'Pacote Romântico', image: '/pacote2.jpg', id: 'pacote2' },
      { title: 'Pacote Aventura', image: '/pacote3.jpg', id: 'pacote3' },
      { title: 'Pacote Luxo', image: '/pacote4.jpg', id: 'pacote4' }
    ],
    icon: '/icons/Island.png'
  },
  vip: {
    title: 'Serviço VIP a bordo',
    slides: [
      { title: 'Translado Executivo', image: '/vip1.jpg', id: 'vip1' },
      { title: 'Assistência Personalizada', image: '/vip2.jpg', id: 'vip2' },
      { title: 'Check-in Prioritário', image: '/vip3.jpg', id: 'vip3' },
      { title: 'Lounge Exclusivo', image: '/vip4.jpg', id: 'vip4' }
    ],
    icon: '/icons/seguro.png'
  },
  experiencias: {
    title: 'Experiências completas',
    slides: [
      { title: 'Safári Fotográfico', image: '/exp1.jpg', id: 'exp1' },
      { title: 'Mergulho com Golfinhos', image: '/exp2.jpg', id: 'exp2' },
      { title: 'Cultura Local', image: '/exp3.jpg', id: 'exp3' },
      { title: 'Gastronomia Tradicional', image: '/exp4.jpg', id: 'exp4' }
    ],
    icon: '/icons/car.png'
  },
  destinos: {
    title: 'Destinos exclusivos',
    slides: [
      { title: 'Ilha de Benguerra', image: '/dest1.jpg', id: 'dest1' },
      { title: 'Arquipélago de Bazaruto', image: '/dest2.jpg', id: 'dest2' },
      { title: 'Parque Gorongosa', image: '/dest3.jpg', id: 'dest3' },
      { title: 'Ilha de Moçambique', image: '/dest4.jpg', id: 'dest4' }
    ],
    icon: '/icons/aviao.png'
  }
}

const menuItems = (Object.keys(categoryData) as CategoryKey[]).map(key => ({
  id: key,
  icon: categoryData[key].icon,
  text: categoryData[key].title.replace('\n', ' ')
}))

export default function PerfectCoverflowSlider() {
  const swiperRef = useRef<SwiperType | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('pacotes')
  const [currentSlides, setCurrentSlides] = useState(categoryData.pacotes.slides)

  const handleMenuItemClick = (categoryId: CategoryKey) => {
    setActiveCategory(categoryId)
    setCurrentSlides(categoryData[categoryId].slides)

    if (swiperRef.current) {
      swiperRef.current.slideTo(0)
    }
  }

  useEffect(() => {
    setCurrentSlides(categoryData.pacotes.slides)
    setActiveCategory('pacotes')
  }, [])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="w-full py-16 bg-gradient-to-b from-white to-[#B2DEE1] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-[#0871B5]">Serviços em Destaque da Atlantic Travel</h2>
            <motion.div className="mt-6 space-y-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${activeCategory === item.id
                    ? 'bg-[#0871B5]/10 text-[#0871B5]'
                    : 'hover:bg-[#0871B5]/10'
                    }`}
                  whileHover={{ x: 5 }}
                  onClick={() => handleMenuItemClick(item.id)}>
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={30}
                    height={30}
                    className={activeCategory === item.id ? 'invert' : ''}
                  />
                  <p className="font-semibold whitespace-pre-line text-left">{categoryData[item.id].title}</p>
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
              key={activeCategory}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                scale: 0.85
              }}
              modules={[EffectCoverflow, Navigation]}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom'
              }}
              className="!overflow-visible">
              {currentSlides.map((slide) => (
                <SwiperSlide key={slide.id} className="!w-[280px] !h-[380px] rounded-xl overflow-hidden shadow-lg cursor-pointer">
                  <motion.div
                    className="relative w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                      <motion.h3
                        className="text-white text-lg font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}>
                        {slide.title}
                      </motion.h3>
                      <motion.button
                        className="w-8 h-8 bg-[#FFF700] rounded-full flex items-center justify-center"
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