import "./sources.css";

export interface SourceItem {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

class Sources {
  draw(data: SourceItem[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector<HTMLTemplateElement>(
      "#sourceItemTemp"
    );

    data.forEach((item) => {
      if (sourceItemTemp instanceof HTMLElement) {
        const sourceClone = sourceItemTemp.content.cloneNode(true);
        if (sourceClone instanceof DocumentFragment) {
          const sourceCloneName = sourceClone.querySelector(
            ".source__item-name"
          );
          if (sourceCloneName) sourceCloneName.textContent = item.name;

          const sourceCloneItem = sourceClone.querySelector(".source__item");
          if (sourceCloneItem)
            sourceCloneItem.setAttribute("data-source-id", item.id);

          fragment.append(sourceClone);
        }
      }
    });

    const sources = document.querySelector(".sources");
    if (sources) sources.append(fragment);
  }
}

export default Sources;
