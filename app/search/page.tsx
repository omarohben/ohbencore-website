import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/seo';
import SearchBar from '@/components/SearchBar';
import SearchResultsList from '@/components/SearchResultsList';
import type { SearchResult } from '@/types/search';

export const metadata: Metadata = createPageMetadata({
  title: 'Search',
  description: 'Search across OHBENCORE services, industries, blog posts, and resources.',
  path: '/search',
});

async function searchContent(query: string): Promise<SearchResult[]> {
  try {
    // Fetch from our own API route (server-side)
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const response = await fetch(
      `${baseUrl}/api/search?q=${encodeURIComponent(query)}`,
      {
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      console.error('Search API error:', response.statusText);
      return [];
    }

    return response.json();
  } catch (error) {
    console.error('Failed to fetch search results:', error);
    return [];
  }
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || '';
  const results = query ? await searchContent(query) : [];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      <section className="space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Search</h1>
          <p className="text-lg text-gray-700">
            Search across OHBENCORE services, industries, blog posts, and resources.
          </p>
        </div>

        <div className="max-w-2xl">
          <SearchBar initialQuery={query} />
        </div>

        <div className="pt-4">
          <SearchResultsList results={results} query={query} />
        </div>
      </section>
    </div>
  );
}

