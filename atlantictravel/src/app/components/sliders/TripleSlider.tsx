'use client'
import React, { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'

const slides = [
    { title: 'Pacotes turísticos personalizados', image: '/img1.jpg' },
    { title: 'Serviço VIP a bordo', image: '/img2.jpg' },
    { title: 'Experiências completas', image: '/img3.jpg' },
    { title: 'Destinos exclusivos', image: '/img4.jpg' },
]

export default function PerfectCoverflowSlider() {
    const swiperRef = useRef<any>(null)
    const middleSlideIndex = Math.floor(slides.length / 2) - 1

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(middleSlideIndex, 0)
        }
    }, [])

    return (
        <div className="w-full py-8 bg-gradient-to-b from-[#fff] to-[#B2DEE1] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-[#0871B5] ">Serviços em </h2>
                        <h2 className="text-3xl font-bold text-[#0871B5] ">Destaque da</h2>
                        <h2 className="text-3xl font-bold text-[#0871B5] ">Atlantic Travel</h2>

                        <div>
                            <div className='flex items-center gap-3 mt-10 mb-4'>
                                <Image
                                    src="/icons/seguro.png"
                                    alt="Descrição da imagem"
                                    width={20}
                                    height={20}
                                />
                                <p className='font-semibold'>Seguros de viagem e assistência <br /> em vistos</p>
                            </div>

                            <div className='flex items-center gap-3 mb-4'>
                                <Image
                                    src="/icons/car.png"
                                    alt="Descrição da imagem"
                                    width={20}
                                    height={20}
                                />
                                <p className='font-semibold'>Reserva de Hotéis & <br /> Transfers</p>
                            </div>

                            <div className='flex items-center gap-3 mb-4'>
                                <Image
                                    src="/icons/Island.png"
                                    alt="Descrição da imagem"
                                    width={20}
                                    height={20}
                                />
                                <p className='font-semibold'> Pacotes turísticos <br /> personalizados</p>
                            </div>

                            <div className='flex items-center gap-3 mb-4'>
                                <Image
                                    src="/icons/aviao.png"
                                    alt="Descrição da imagem"
                                    width={20}
                                    height={20}
                                />
                                <p className='font-semibold'> Consultoria dedicada</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <Swiper
                            ref={swiperRef}
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
                            className="!overflow-visible"
                            initialSlide={middleSlideIndex}
                        >
                            {slides.map((slide, i) => (
                                <SwiperSlide
                                    key={i}
                                    className="!w-[280px] !h-[380px] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ease-out"
                                >
                                    <div
                                        className="relative w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${slide.image})` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <h3 className="text-white text-lg font-bold mb-2">{slide.title}</h3>
                                            <button
                                                className="ml-auto w-8 h-8 bg-[#FFF700] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    console.log('Botão clicado no slide:', i)
                                                }}
                                            >
                                                <FiArrowRight className="text-black text-base" />
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button 
                            className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-4 z-20 w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
                            aria-label="Anterior"
                        >
                            <FiChevronLeft className="text-white text-xl" />
                        </button>
                        
                        <button 
                            className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-4 z-20 w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
                            aria-label="Próximo"
                        >
                            <FiChevronRight className="text-white text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}