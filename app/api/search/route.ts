import { NextRequest, NextResponse } from 'next/server';
import { searchIndex } from '@/config/search-index';
import type { SearchResult, SearchIndexItem } from '@/types/search';

/**
 * AI Search Provider Placeholder
 * TODO: Integrate an LLM/vector search provider here.
 * This function could re-rank results, add aiExplanation, or synthesize an answer.
 * For now, it returns results unchanged.
 */
async function callAiSearchProvider(
  query: string,
  results: SearchResult[]
): Promise<SearchResult[]> {
  // Future implementation:
  // - Send query + results to an LLM API (OpenAI, Anthropic, etc.)
  // - Get AI-generated explanations or re-ranked results
  // - Populate aiExplanation field with contextual insights
  // - Return enhanced results
  return results;
}

/**
 * Simple keyword-based search implementation
 */
function performKeywordSearch(query: string): SearchResult[] {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) {
    return [];
  }

  const scoredResults = searchIndex
    .map((item: SearchIndexItem) => {
      let score = 0;

      // Search in title (weighted highest)
      if (item.title.toLowerCase().includes(normalizedQuery)) {
        score += 3;
      }

      // Search in snippet
      if (item.snippet.toLowerCase().includes(normalizedQuery)) {
        score += 2;
      }

      // Search in tags
      const tagsString = item.tags.join(' ').toLowerCase();
      if (tagsString.includes(normalizedQuery)) {
        score += 1;
      }

      // Bonus for exact tag match
      if (item.tags.some((tag) => tag.toLowerCase() === normalizedQuery)) {
        score += 2;
      }

      return {
        ...item,
        score,
        aiExplanation: undefined,
      };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => {
      // Sort by score descending, then alphabetically by title
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.title.localeCompare(b.title);
    });

  return scoredResults;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');

    if (!query || query.trim() === '') {
      return NextResponse.json<SearchResult[]>([]);
    }

    // Perform keyword search
    let results = performKeywordSearch(query);

    // Placeholder for AI enhancement (not called yet, but ready for future)
    // results = await callAiSearchProvider(query, results);

    return NextResponse.json<SearchResult[]>(results);
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json<SearchResult[]>([], { status: 500 });
  }
}
