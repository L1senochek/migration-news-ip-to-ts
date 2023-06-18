import { DrawNews, DrawSources } from '../../types/view/appView';
import AppController from '../controller/controller';
import AppView from '../view/appView';

class App {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
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
  }
}

export default App;
