import AppController from "../controller/controller";
import { AppView } from "../view/appView";
import { NewsItem } from "../view/news/news";
import { SourceItem } from "../view/sources/sources";

class App {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    document
      .querySelector(".sources")
      ?.addEventListener("click", (e: Event) => {
        this.controller.getNews(
          e,
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
      });

    this.controller.getSources(
      (data: { status: string; sources?: SourceItem[] } | undefined) => {
        if (data) {
          this.view.drawSources(data);
        }
      }
    );
  }
}

export default App;
