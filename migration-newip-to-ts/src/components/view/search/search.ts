import { DrawNews } from '../../../types/view/appView';
import AppController from '../../controller/controller';
import AppView from '../appView';

class Search {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  startSearch(query: string): void {
    this.controller.searchNews(query, (data?: DrawNews) => {
      if (data) this.view.drawNews(data);
    });
  }
}

export default Search;
