import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Tag, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import { Button } from '@/components/ui/button';

const RelatedCases = ({ serviceTag }) => {
  const relatedPosts = blogPosts
    .filter(post => post.tags.includes(serviceTag))
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return (
      <div className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Casos Clínicos Relacionados
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Próximamente compartiremos casos de éxito relacionados con este servicio. ¡Vuelve pronto!
          </p>
        </div>
      </div>
    );
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Casos Clínicos de {serviceTag}
          </h2>
          <p className="mt-2 text-lg leading-8 text-slate-600">
            Descubre cómo hemos ayudado a otros pacientes con esta técnica.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-slate-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {relatedPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex max-w-xl flex-col items-start justify-between bg-white p-6 rounded-xl shadow-lg hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-slate-500 flex items-center">
                        <Calendar className="h-4 w-4 mr-1"/>
                        {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <div className="text-slate-500 flex items-center">
                        <Clock className="h-4 w-4 mr-1"/>{post.readingTime} min lectura
                    </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-800 group-hover:text-teal-600">
                    <Link to={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">{post.summary}</p>
                </div>
                 <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-700/10">
                           <Tag className="h-3 w-3 mr-1" /> {tag}
                        </span>
                    ))}
                </div>
              </div>
               <div className="mt-6">
                 <Button variant="link" asChild className="p-0 text-teal-600 hover:text-teal-800">
                    <Link to={`/blog/${post.slug}`}>Leer más <ArrowRight className="h-4 w-4 ml-1" /></Link>
                 </Button>
               </div>
            </motion.article>
          ))}
        </div>
        {blogPosts.filter(p => p.tags.includes(serviceTag)).length >= 3 && (
            <div className="mt-16 text-center">
                <Button asChild size="lg">
                    <Link to="/blog">
                        Ver todos los casos <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        )}
      </div>
    </div>
  );
};

export default RelatedCases;