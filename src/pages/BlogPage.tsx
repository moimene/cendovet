import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    hover: { scale: 1.03, transition: { duration: 0.3 } }
  };

  return (
    <>
      <Helmet>
        <title>Blog y Casos Clínicos - CENDOVET</title>
        <meta name="description" content="Explora nuestros casos clínicos y artículos sobre cirugía mínimamente invasiva, cardiología, y otras especialidades veterinarias." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 py-16 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-cyan-900 dark:text-cyan-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog y Casos Clínicos
          </motion.h1>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Conocimiento y experiencia al servicio de la salud animal.
          </motion.p>
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.slug}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg flex flex-col group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    alt={`Imagen para el artículo ${post.title}`}
                   src="https://images.unsplash.com/photo-1601941707251-5a887e9db2e1" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                     <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="inline-flex items-center rounded-full bg-cyan-500/20 text-cyan-100 backdrop-blur-sm text-xs font-medium px-2 py-1 border border-cyan-500/30">
                               {tag}
                            </span>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-xl font-bold text-cyan-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 flex-grow">
                    {post.summary}
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
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
        </motion.div>
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-slate-500 dark:text-slate-400">No se encontraron artículos. Intenta con otra búsqueda o filtro.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPage;