import { DrawNews } from '../view/appView';
import { SourceItem } from '../view/sources/sources';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback: <T extends { status: string; sources?: SourceItem[] }>(data?: T) => void) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: (data?: DrawNews) => void) {
    let target = e.target;
    const newsContainer = e.currentTarget;

    while (target !== newsContainer) {
      if (target instanceof HTMLElement) {
        if (target.classList.contains('source__item')) {
          const sourceId: string | null = target.getAttribute('data-source-id');
          if (
            sourceId !== null &&
            newsContainer instanceof HTMLElement &&
            newsContainer.getAttribute('data-source') !== sourceId
          ) {
            newsContainer.setAttribute('data-source', sourceId);
            super.getResp(
              {
                endpoint: 'everything',
                options: {
                  sources: sourceId,
                },
              },
              callback
            );
          }
          return;
        }
        target = target.parentNode;
      }
    }
  }
  searchNews(query: string, callback: (data?: DrawNews) => void) {
    super.getResp(
      {
        endpoint: 'everything',
        options: {
          q: query,
        },
      },
      callback
    );
  }
}

export default AppController;
