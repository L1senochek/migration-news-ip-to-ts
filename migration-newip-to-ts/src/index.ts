import App from './components/app/app';
import Search from './components/view/search/search';
import './global.css';

const app = new App();
app.start();

const search = new Search();
const searchInput = document.querySelector('.search-button__input');

if (searchInput instanceof HTMLInputElement) {
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      if (typeof event.target === 'object' && event.target !== null) {
        const target = event.target;
        if (target instanceof HTMLInputElement) search.startSearch(target.value);
      }
    }
  });
}
