import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { reviewsData, GOOGLE_REVIEWS_URL, AVERAGE_RATING, TOTAL_REVIEWS } from '@/data/reviewsData';

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}
      />
    ))}
  </div>
);

const GoogleReviews = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-full px-4 py-2 shadow-sm mb-6">
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Google">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {AVERAGE_RATING} ★ · {TOTAL_REVIEWS} reseñas en Google
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-teal-400 mb-2">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Historias reales de familias que confiaron en nosotros para el cuidado de sus mascotas.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviewsData.map((review, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-center justify-between mb-3">
              <div>
                  <p className="font-bold text-slate-800 dark:text-white text-sm">{review.name}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-4">
                "{review.text}"
              </p>

              {review.clinicResponse && (
                <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <MessageCircle size={12} className="text-teal-600 dark:text-teal-400" />
                    <span className="text-xs font-semibold text-teal-700 dark:text-teal-400">Respuesta de la clínica</span>
                  </div>
                  <p className="text-xs text-teal-700 dark:text-teal-200 leading-relaxed">
                    {review.clinicResponse}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold gap-2"
          >
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              Ver todas las reseñas en Google <ExternalLink size={16} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
