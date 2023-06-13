export interface NewsResponse {
  response: {
    status: string;
    sources: SourcesTypes[];
  };
}

interface SourcesTypes {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}
