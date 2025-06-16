import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '500', '600', '700'],
});

export default function Welcome() {
    return (
        <div className={`bg-gradient-to-b from-[#B2DEE1] to-[#FFFFFF]  p-8 ${inter.className}`}>
            <div>
                <div className='text-center'>
                    <p className="font-semibold text-3xl">Bem-vindo à Atlantic</p>
                    <p className="font-semibold text-3xl">Travel, Lda.</p>

                    <div className="mt-10 text-base text-[#333]">
                        <p>Com mais de 15 anos transformando sonhos em experiências memoráveis.</p>
                        <p>Ajudamos milhares de viajantes a descobrir destinos, viver culturas e</p>
                        <p>colecionar histórias, dentro e fora de Moçambique</p>
                    </div>
                </div>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8 mt-30 mb-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm'>
                        <div className='bg-white p-4 shadow rounded'>
                            <p className='font-bold'>Orgulhamo-nos de ser</p>
                            <div className='text-[rgba(0,0,0,0.65)]'>
                                <p>membros da IATA e da AVITUM, </p>
                                <p>reforçando o nosso compromisso com padrões internacionais de . </p>
                                <p>qualidade</p>
                            </div>
                        </div>

                        <div className='bg-white p-4 shadow rounded '>
                            <p className='font-bold'>Ao longo da nossa história, conquistamos a confiança de milhares de viajantes </p>
                            <div className='text-[rgba(0,0,0,0.65)]'>
                                <p >reconhecimento de instituições de</p>
                                <p>referência. Garantimos profissionalismo,</p>
                                <p>segurança e excelência em cada passo da</p>
                                <p>tua jornada.</p>
                            </div>

                        </div>

                        <div className='bg-white p-4 shadow rounded '>
                            <p className='font-bold'>Do bilhete ao regresso, planeamos contigo,</p>
                            <div className='text-[rgba(0,0,0,0.65)]'>
                                <p>dos destinos mais próximos</p>
                                <p>às aventuras internacionais, temos</p>
                                <p>soluções à tua medida. Do primeiro</p>
                                <p>contacto ao pós-viagem, estamos</p>
                                <p>sempre ao teu lado</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
