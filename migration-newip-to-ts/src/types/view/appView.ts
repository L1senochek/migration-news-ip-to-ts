import { NewsItem } from './news/news';
import { SourceItem } from './sources/sources';

export interface DrawNews {
  status: string;
  totalResult: number;
  articles?: NewsItem[];
}

export interface DrawSources {
  status: string;
  sources?: SourceItem[];
}
