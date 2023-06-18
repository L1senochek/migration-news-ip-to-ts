import { DrawNews, DrawSources } from '../../types/view/appView';
import News from './news/news';
import Sources from './sources/sources';

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

  drawSources(data: DrawSources) {
    const values = data.sources;
    if (values) this.sources.draw(values);
  }
}

export default AppView;
