import App from "./components/app/app";
import Search from "./components/view/search/search";
import "./global.css";

const app = new App();
app.start();

const search = new Search();
const searchInput = document.getElementById("search");

if (searchInput instanceof HTMLInputElement) {
  searchInput.addEventListener("input", (event) => {
    if (typeof event.target === "object" && event.target !== null) {
      const target = event.target;
      if (target instanceof HTMLInputElement) {
        const query = target.value;
        search.startSearch(query);
      }
    }
  });
}
