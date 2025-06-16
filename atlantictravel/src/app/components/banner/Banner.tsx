import { Inter } from 'next/font/google';
import FormRender from '../Forms/formrender/FormRender';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function Banner() {
  return (
    <div
      className={`relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/banner.jpg')] ${inter.className}`}>


      <div className="absolute w-[800] inset-0 bg-gradient-to-r from-black/60 to-transparent z-0"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-8 py-12">

          <div className="flex flex-col justify-center px-4 sm:px-6">
            <p className="text-sm text-white mb-2">Viagens Internacionais | Viagens Nacionais</p>
            <h1 className="text-[#FFF700] text-4xl sm:text-5xl font-bold leading-tight">
              Explore <span className="text-white block">o Mundo com</span>
              <span className="text-white block">Confiança</span>
            </h1>
            <div className="mt-6 text-white text-base space-y-1">
              <p>Desde cidades históricas na Europa a aventuras</p>
              <p>na África do Sul, criamos itinerários sob medida</p>
              <p>com voos, hotéis e experiências únicas.</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end px-4 sm:px-6">
            <FormRender />
          </div>

        </div>
      </div>
    </div>
  );
}
