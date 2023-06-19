import './countries.css';

export const countriesArr: string[] = [
  'ae',
  'ar',
  'at',
  'au',
  'be',
  'bg',
  'br',
  'ca',
  'ch',
  'cn',
  'co',
  'cu',
  'cz',
  'de',
  'eg',
  'fr',
  'gb',
  'gr',
  'hk',
  'hu',
  'id',
  'ie',
  'il',
  'in',
  'it',
  'jp',
  'kr',
  'lt',
  'lv',
  'ma',
  'mx',
  'my',
  'ng',
  'nl',
  'no',
  'nz',
  'ph',
  'pl',
  'pt',
  'ro',
  'rs',
  'ru',
  'sa',
  'se',
  'sg',
  'si',
  'sk',
  'th',
  'tr',
  'tw',
  'ua',
  'us',
  've',
  'za',
];

class Countries {
  draw(countries: string[]): void {
    const fragment = document.createDocumentFragment();
    const countriesItemTemp = document.querySelector<HTMLTemplateElement>('#countriesItemTemp');

    countries.forEach((country) => {
      if (countriesItemTemp instanceof HTMLElement) {
        const countriesClone = countriesItemTemp.content.cloneNode(true);
        if (countriesClone instanceof DocumentFragment) {
          const countriesCloneName = countriesClone.querySelector('.countries__item-name');
          if (countriesCloneName) {
            countriesCloneName.textContent = country;
          }
          const countriesCloneItem = countriesClone.querySelector('.countries__item');
          if (countriesCloneItem) {
            countriesCloneItem.setAttribute('data-countries-id', country);
          }
          fragment.append(countriesClone);
        }
      }
    });

    const countr = document.querySelector('.countries');
    if (countr) countr.append(fragment);
  }
}

export default Countries;
