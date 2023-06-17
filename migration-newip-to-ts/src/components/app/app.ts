import AppController from '../controller/controller';
import { AppView, DrawNews } from '../view/appView';
import { SourceItem } from '../view/sources/sources';

type getSources = {
  status: string;
  sources?: SourceItem[];
};

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

    this.controller.getSources((data?: getSources) => {
      if (data) this.view.drawSources(data);
    });
  }
}

export default App;
