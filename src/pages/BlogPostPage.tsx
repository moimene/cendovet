import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { seoData } from '@/data/seoData';
import { articleSchema, breadcrumbSchema } from '@/data/schemaData';
import { blogPosts } from '@/data/blogData';
import NotFoundPage from './NotFoundPage';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEOHead
        title={`${post.title} - CENDOVET Blog`}
        description={post.summary}
        canonicalUrl={`https://cendovet.lovable.app/blog/${post.slug}`}
        ogImage={post.image}
        jsonLd={[
          articleSchema({
            title: post.title,
            description: post.summary,
            datePublished: post.date,
            dateModified: post.date,
            slug: post.slug,
            image: post.image
          }),
          breadcrumbSchema([
            { name: 'Inicio', url: 'https://cendovet.lovable.app/' },
            { name: 'Blog', url: 'https://cendovet.lovable.app/blog' },
            { name: post.title, url: `https://cendovet.lovable.app/blog/${post.slug}` }
          ])
        ]}
      />

      <div className="bg-white">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link to="/blog" className="flex items-center text-teal-600">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al Blog
                </Link>
              </Button>
            </div>

            {/* Post Header */}
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-700/10">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readingTime} min de lectura</span>
                </div>
              </div>
            </header>

            {/* Post Image */}
            <div className="my-8 rounded-lg overflow-hidden shadow-lg">
              {post.video ? (
                <video
                  className="w-full h-auto"
                  src={post.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              ) : (
                <img
                  className="w-full h-auto object-cover"
                  alt={`Imagen principal del artículo ${post.title}`}
                  src={post.image.startsWith('http') ? `${post.image}?w=1200&auto=format&fit=crop` : post.image}
                />
              )}
            </div>

            {/* Post Content */}
            <article
              className="prose prose-lg max-w-none prose-teal"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Related Posts (Placeholder) */}
            <div className="mt-16 pt-8 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Otros artículos que te pueden interesar</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map(relatedPost => (
                  <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`} className="block p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <h4 className="font-semibold text-teal-700">{relatedPost.title}</h4>
                    <p className="text-sm text-slate-500 line-clamp-2 mt-1">{relatedPost.summary}</p>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;