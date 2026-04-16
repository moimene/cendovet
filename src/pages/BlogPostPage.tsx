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

            {/* Instagram Reel Embed */}
            {post.instagramReel && (
              <div className="mt-12">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">@cvcampogibraltar</p>
                      <p className="text-xs text-slate-500">Ver este caso en Instagram</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <iframe
                      src={`${post.instagramReel}embed/`}
                      className="rounded-lg border border-slate-200"
                      width="400"
                      height="480"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency
                      allow="encrypted-media"
                      title="Instagram Reel"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <a
                      href={post.instagramReel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      Ver en Instagram &rarr;
                    </a>
                  </div>
                </div>
              </div>
            )}

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