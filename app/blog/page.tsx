import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = createPageMetadata({
  title: 'Blog',
  description: 'Articles and technical guides on infrastructure, backup, networking, cloud and automation.',
  path: '/blog',
});

export default function BlogPage() {
  // File-based loader; replaces later with Tina query.
  // TODO: Replace file-based loader with TinaCMS query once Tina Cloud is configured.
  const posts = getAllPosts();
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog</h1>
      <p className="text-lg text-gray-700 max-w-3xl mb-10">
        Articles, insights, and technical guides about IT infrastructure, best practices, and emerging technologies.
      </p>

      {posts.length === 0 ? (
        <p className="text-sm text-gray-500">No posts published yet. {/* TODO: Replace file loader with TinaCMS content API. */}</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border border-gray-200 rounded-lg p-6 bg-white">
              <header className="mb-3">
                <h2 className="text-2xl font-semibold text-gray-900">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <time className="text-xs text-gray-500" dateTime={post.date}>{post.date}</time>
              </header>
              <p className="text-gray-600 mb-4">{post.description}</p>
              {post.tags.length > 0 && (
                <ul className="flex flex-wrap gap-2 text-xs">
                  {post.tags.map((tag) => (
                    <li key={tag} className="px-2 py-1 bg-gray-100 rounded-md text-gray-700">{tag}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
