import Loader from "./loader";

class AppLoader extends Loader {
  constructor() {
    super("https://newsapi.org/v2/", {
      apiKey: "3af3491ae50c4726867215418bff49b0", // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
