import "./news.css";

export interface NewsItem {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string | null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

class News {
  draw(data: NewsItem[]): void {
    const news =
      data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector<HTMLTemplateElement>(
      "#newsItemTemp"
    );

    news.forEach((item, idx) => {
      if (newsItemTemp instanceof Node) {
        const newsClone = newsItemTemp.content.cloneNode(true);

        if (newsClone instanceof DocumentFragment) {
          if (idx % 2) {
            const newsItem = newsClone.querySelector<HTMLElement>(
              ".news__item"
            );
            if (newsItem) newsItem.classList.add("alt");
          }

          const newsMetaPhoto = newsClone.querySelector<HTMLElement>(
            ".news__meta-photo"
          );
          if (newsMetaPhoto) {
            newsMetaPhoto.style.backgroundImage = `url(${
              item.urlToImage || "img/news_placeholder.jpg"
            })`;
          }

          const newsMetaAuthor = newsClone.querySelector<HTMLElement>(
            ".news__meta-author"
          );
          if (newsMetaAuthor)
            newsMetaAuthor.textContent = item.author || item.source.name;

          const newsMetaDate = newsClone.querySelector<HTMLElement>(
            ".news__meta-date"
          );
          if (newsMetaDate)
            newsMetaDate.textContent = item.publishedAt
              .slice(0, 10)
              .split("-")
              .reverse()
              .join("-");

          const newsDescriptionTitle = newsClone.querySelector<HTMLElement>(
            ".news__description-title"
          );
          if (newsDescriptionTitle)
            newsDescriptionTitle.textContent = item.title;

          const newsDescriptionSource = newsClone.querySelector<HTMLElement>(
            ".news__description-source"
          );
          if (newsDescriptionSource)
            newsDescriptionSource.textContent = item.source.name;

          const newsDescriptionContent = newsClone.querySelector<HTMLElement>(
            ".news__description-content"
          );
          if (newsDescriptionContent)
            newsDescriptionContent.textContent = item.description;

          const newsReadMoreLink = newsClone.querySelector<HTMLElement>(
            ".news__read-more a"
          );
          if (newsReadMoreLink) newsReadMoreLink.setAttribute("href", item.url);

          fragment.append(newsClone);
        }
      }
    });

    const newsContainer = document.querySelector<HTMLElement>(".news");
    if (newsContainer) {
      newsContainer.innerHTML = "";
      newsContainer.appendChild(fragment);
    }
  }
}

export default News;
