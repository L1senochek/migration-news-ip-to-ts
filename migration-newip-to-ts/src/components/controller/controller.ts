import { Callback, EndpointTypes } from '../../types/controller/controller';
import { DrawNews, DrawSources } from '../../types/view/appView';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback: Callback<DrawSources>) {
    super.getResp(
      {
        endpoint: EndpointTypes.Sources,
      },
      callback
    );
  }

  getNews(e: Event, callback: Callback<DrawNews>) {
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
                endpoint: EndpointTypes.Everything,
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

  searchNews(query: string, callback: Callback<DrawNews>) {
    super.getResp(
      {
        endpoint: EndpointTypes.Everything,
        options: {
          q: query,
        },
      },
      callback
    );
  }

  getCountryNews(e: Event, callback: Callback<DrawNews>) {
    let target = e.target;
    const newsContainer = e.currentTarget;

    while (target !== newsContainer) {
      if (target instanceof Element) {
        if (target.classList.contains('countries__item')) {
          const countyId: string | null = target.getAttribute('data-countries-id');
          if (
            countyId !== null &&
            newsContainer instanceof Element &&
            newsContainer.getAttribute('data-county') !== countyId
          ) {
            newsContainer.setAttribute('data-county', countyId);
            super.getResp(
              {
                endpoint: EndpointTypes.TopHeadlines,
                options: {
                  country: countyId,
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
}

export default AppController;
