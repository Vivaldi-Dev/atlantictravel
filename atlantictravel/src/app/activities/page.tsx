"use client"

import React from 'react';
import { ActivitySlider } from './components/ActivitySlider/ActivitySlider';
import { useActivity } from '@/hooks/activities/activities';

export default function ActivityPage() {
  const { activity, loading, error } = useActivity();

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!activity.length) return <div>Nenhuma atividade encontrada</div>;

  const firstActivity = activity[0];

  return (
    <div className='container mx-auto px-4 py-36'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='w-full h-96 md:h-[500px]'>
          <ActivitySlider photos={firstActivity.photos} />
        </div>

        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>{firstActivity.title}</h1>
          <p className='text-gray-600'>{firstActivity.description}</p>
          <div className='pt-4'>
            <p className='text-xl font-semibold'>
              Preço: {firstActivity.price.toLocaleString()} MZN
            </p>
            <p className='text-gray-500'>
              Data: {new Date(firstActivity.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}