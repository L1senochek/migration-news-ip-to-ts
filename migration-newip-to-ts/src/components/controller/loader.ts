import { Callback, EndpointTypes } from '../../types/controller/controller';
import { HttpMetodsEnum, HttpStatusCodesEnum, ResponseInterface } from '../../types/controller/loader';
import { DrawNews, DrawSources } from '../../types/view/appView';

class Loader {
  baseLink: string;
  options: Record<string, string>;

  constructor(baseLink: string, options: Record<string, string>) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: ResponseInterface,
    callback = (): void => {
      console.error('No callback for GET response');
    }
  ) {
    this.load(HttpMetodsEnum.GET, endpoint, callback, options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === HttpStatusCodesEnum.UNAUTHORIZED || res.status === HttpStatusCodesEnum.NOT_FOUND)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
    return res;
  }

  makeUrl(options: Record<string, string>, endpoint: EndpointTypes) {
    const urlOptions: Record<string, string> = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(
    method: HttpMetodsEnum,
    endpoint: EndpointTypes,
    callback: Callback<DrawSources | DrawNews>,
    options: Record<string, string> = {}
  ) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
