import News from "./news/news";
import { NewsItem } from "./news/news";
import Sources from "./sources/sources";
import { SourceItem } from "./sources/sources";

export class AppView {
  private news: News;
  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews<T extends NewsItem>(data: {
    status: string;
    totalResults: number;
    articles?: T[];
  }) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources<T extends SourceItem>(data: { status: string; sources?: T[] }) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
