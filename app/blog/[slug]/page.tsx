import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug, renderMarkdown } from '@/lib/blog';

interface BlogPostPageProps { params: { slug: string } }

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  // TODO: Swap out getPostBySlug with TinaCMS content query when enabled.
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post Not Found', description: 'Requested blog post not found.' };
  }
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ohbencore.com'}/blog/${post.slug}`,
    },
    twitter: { title: post.title, description: post.description },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // File-based retrieval; replace with Tina query later.
  // TODO: Use TinaCMS/MDX pipeline instead of custom markdown renderer.
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  const html = renderMarkdown(post.body);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <time className="text-sm text-gray-500" dateTime={post.date}>{post.date}</time>
          {post.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2 mt-4 text-xs">
              {post.tags.map((tag) => (
                <li key={tag} className="px-2 py-1 bg-gray-100 rounded-md text-gray-700">{tag}</li>
              ))}
            </ul>
          )}
        </header>
        <div className="prose prose-sm md:prose-base max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
        {/* TODO: Replace markdown render with TinaCMS / MDX pipeline */}
      </article>
    </div>
  );
}
