import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://news-proxy.spanb4.shop/', {
      apiKey: '3af3491ae50c4726867215418bff49b0', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
