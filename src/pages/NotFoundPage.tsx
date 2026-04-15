import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <>
      <SEOHead
        title="404 - Página no encontrada - CENDOVET"
        description="La página que buscas no existe o ha sido movida."
        canonicalUrl="https://cendovet.lovable.app/404"
        noindex={true}
      />
      <div className="flex flex-col items-center justify-center text-center py-20 md:py-32 px-4 bg-gray-50">
        <AlertTriangle className="text-amber-500 w-16 h-16 mb-4" />
        <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-2">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-4">Página no encontrada</h2>
        <p className="text-lg text-gray-600 max-w-md mb-8">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Button asChild>
            <Link to="/">Volver a la página de inicio</Link>
        </Button>
    </div>
    </>
  );
};

export default NotFoundPage;