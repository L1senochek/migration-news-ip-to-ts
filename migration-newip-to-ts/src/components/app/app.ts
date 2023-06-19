import { DrawNews, DrawSources } from '../../types/view/appView';
import AppController from '../controller/controller';
import AppView from '../view/appView';
import Countries, { countriesArr } from '../view/countries/countries';

class App {
  private controller: AppController;
  private view: AppView;
  private countries: Countries;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
    this.countries = new Countries();
  }

  start(): void {
    document.querySelector('.sources')?.addEventListener('click', (e: Event) => {
      this.controller.getNews(e, (data?: DrawNews) => {
        if (data) this.view.drawNews(data);
      });
    });

    this.controller.getSources((data?: DrawSources) => {
      if (data) this.view.drawSources(data);
    });

    this.countries.draw(countriesArr);
    document.querySelector('.countries')?.addEventListener('click', (e: Event) =>
      this.controller.getCountryNews(e, (data?: DrawNews) => {
        if (data) this.view.drawNews(data);
      })
    );
  }
}

export default App;
