import Link from 'next/link';
import type { SearchResult } from '@/types/search';

interface SearchResultsListProps {
  results: SearchResult[];
  isLoading?: boolean;
  query?: string;
}

const typeColors: Record<SearchResult['type'], string> = {
  service: 'bg-blue-100 text-blue-800',
  industry: 'bg-green-100 text-green-800',
  solution: 'bg-purple-100 text-purple-800',
  blog: 'bg-yellow-100 text-yellow-800',
  other: 'bg-gray-100 text-gray-800',
};

const typeLabels: Record<SearchResult['type'], string> = {
  service: 'Service',
  industry: 'Industry',
  solution: 'Solution',
  blog: 'Blog',
  other: 'Page',
};

export default function SearchResultsList({
  results,
  isLoading = false,
  query,
}: SearchResultsListProps) {
  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Searching...</p>
      </div>
    );
  }

  if (!query || query.trim() === '') {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-700">
          Start typing to search OHBENCORE content.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Search across services, industries, solutions, and resources.
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-700">
          No results found for &ldquo;{query}&rdquo;
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Try different keywords or browse our{' '}
          <Link href="/services" className="text-blue-600 hover:underline">
            services
          </Link>{' '}
          or{' '}
          <Link href="/industries" className="text-blue-600 hover:underline">
            industries
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-600">
        Found {results.length} {results.length === 1 ? 'result' : 'results'} for &ldquo;{query}&rdquo;
      </p>

      <div className="space-y-4">
        {results.map((result, index) => (
          <article
            key={`${result.url}-${index}`}
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <Link
                href={result.url}
                className="text-lg font-semibold text-blue-600 hover:text-blue-800 hover:underline"
              >
                {result.title}
              </Link>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${
                  typeColors[result.type]
                }`}
              >
                {typeLabels[result.type]}
              </span>
            </div>

            <p className="text-sm text-gray-700 mb-2">{result.snippet}</p>

            {result.aiExplanation && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-500 mb-1">AI Insight:</p>
                <p className="text-sm text-gray-600 italic">{result.aiExplanation}</p>
              </div>
            )}

            <p className="text-xs text-gray-400 mt-2">{result.url}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
