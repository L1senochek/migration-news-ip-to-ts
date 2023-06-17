import News from './news/news';
import { NewsItem } from './news/news';
import Sources from './sources/sources';
import { SourceItem } from './sources/sources';

export interface DrawNews {
  status: string;
  totalResult: number;
  articles?: NewsItem[];
}

export interface drawSources {
  status: string;
  sources?: SourceItem[];
}

export class AppView {
  private news: News;
  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: DrawNews) {
    const values = data.articles;
    if (values) this.news.draw(values);
  }

  drawSources(data: drawSources) {
    const values = data.sources;
    if (values) this.sources.draw(values);
  }
}

export default AppView;
