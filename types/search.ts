export type SearchResultType = "service" | "industry" | "solution" | "blog" | "other";

export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  type: SearchResultType;
  score: number;
  aiExplanation?: string;
}

export interface SearchIndexItem {
  title: string;
  url: string;
  type: SearchResultType;
  snippet: string;
  tags: string[];
}
