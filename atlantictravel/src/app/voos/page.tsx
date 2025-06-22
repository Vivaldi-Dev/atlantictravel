import { Suspense } from 'react';
import FlightResultsPageClient from './components/FlightResultsPageClient';


export default function page() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <FlightResultsPageClient />
    </Suspense>
  );
}
