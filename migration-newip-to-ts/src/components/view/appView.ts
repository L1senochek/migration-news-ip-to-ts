import { DrawNews, DrawSources } from '../../types/view/appView';
import Countries from './countries/countries';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
  private news: News;
  private sources: Sources;
  private countries: Countries;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
    this.countries = new Countries();
  }

  drawNews(data: DrawNews) {
    const values = data.articles;
    if (values) this.news.draw(values);
  }

  drawSources(data: DrawSources) {
    const values = data.sources;
    if (values) this.sources.draw(values);
  }

  drawCountries(countries: string[]) {
    this.countries.draw(countries);
  }
}

export default AppView;
