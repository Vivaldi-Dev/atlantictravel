import React from 'react'
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700']
})

export default function Page() {
  return (
    <div className='py-30'>
      <div>

      </div>
      <div className={`${inter.variable} font-sans text-center text-sm`}>
        <p className='text-center font-semibold'>Moçambique espera por ti!</p>
        <p>Moçambique é uma terra de contrastes naturais e culturais impressionantes. Dos recifes de coral do Índico às</p>
        <p>savanas  cheias de vida selvagem, o país abriga alguns dos destinos mais deslumbrantes e ainda pouco</p>
        <p>explorados do continente  africano. Se procuras por lugares que combinam beleza, tranquilidade e autenticidade,</p>
        <p>a Atlantic Travel apresenta-te 5  locais em Moçambique que parecem saídos de um postal:</p>
      </div>

      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-3'>

        </div>
      </div>

    </div>
  )
}
