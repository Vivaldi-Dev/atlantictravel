'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Customer() {
  const clients = [
    '/img82.png', '/img56.png', '/img58.png', '/img59.png', 
    '/img80.png', '/img60.png', '/Frames16.png', '/img62.png',
    '/img63.png', '/img64.png', '/img66.png', '/img75.png',
    '/img77.png', '/img78.jpg', '/img76.png', '/img79.png',
    '/img81.png', '/img22.png'
  ]

  return (
    <div className='p-8 mt-16'>
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-xl font-semibold mb-12 text-center'>
        Nossos Clientes
      </motion.p>
      
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 items-center'>
          {clients.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.05,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className='relative w-full h-28 flex items-center justify-center p-4'>
              <Image
                src={src}
                alt={`Logo cliente ${index + 1}`}
                fill
                className='object-contain  hover:grayscale-0 transition-all duration-300'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}