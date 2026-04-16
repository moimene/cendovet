import React, { useState } from 'react';
import SEOHead from '@/components/SEOHead';
import { seoData } from '@/data/seoData';
import { breadcrumbSchema } from '@/data/schemaData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tag, Calendar, Clock, Search, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);

  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const cardVariants = {
    hover: { scale: 1.03, transition: { duration: 0.3 } }
  };

  return (
    <>
      <SEOHead
        {...seoData.blog}
        jsonLd={[
          breadcrumbSchema([
            { name: 'Inicio', url: 'https://cendovet.lovable.app/' },
            { name: 'Blog', url: 'https://cendovet.lovable.app/blog' }
          ])
        ]}
      />

      {/* Hero Section */}
      <div className="bg-slate-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Blog y Casos Clínicos
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conocimiento y experiencia al servicio de la salud animal.
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Buscar por título o contenido..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={!selectedTag ? 'default' : 'outline'}
            onClick={() => setSelectedTag(null)}
            className="rounded-full"
          >
            Todos
          </Button>
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={selectedTag === tag ? 'default' : 'outline'}
              onClick={() => setSelectedTag(tag)}
              className="rounded-full"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.slug}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative overflow-hidden">
                  {post.video ? (
                    <video
                      className="w-full h-48 object-cover"
                      src={post.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      alt={`Imagen para el artículo ${post.title}`}
                      src={post.image.startsWith('http') ? `${post.image}?w=800&auto=format&fit=crop` : post.image}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                     <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="inline-flex items-center rounded-full bg-teal-500/20 text-teal-100 text-xs font-medium px-2 py-1 border border-teal-500/30">
                               {tag}
                            </span>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm line-clamp-3 flex-grow">
                    {post.summary}
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readingTime} min de lectura</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-slate-500">No se encontraron artículos. Intenta con otra búsqueda o filtro.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPage;