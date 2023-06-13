import AppController from "../../controller/controller";
import AppView from "../appView";
import { NewsItem } from "../news/news";

class Search {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  startSearch(query: string): void {
    this.controller.searchNews(
      query,
      (
        data:
          | { status: string; totalResults: number; articles?: NewsItem[] }
          | undefined
      ) => {
        if (data) {
          this.view.drawNews(data);
        }
      }
    );
  }
}

export default Search;
