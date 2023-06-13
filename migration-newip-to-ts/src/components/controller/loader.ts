interface ApiResponse<T> {
  body: T;
  bodyUsed: boolean;
  headers: Headers;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: string;
  url: string;
}

class Loader {
  baseLink: string;
  options: Record<string, string>;

  constructor(baseLink: string, options: Record<string, string>) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    {
      endpoint,
      options = {},
    }: { endpoint: string; options?: Record<string, string> },
    callback = (): void => {
      console.error("No callback for GET response");
    }
  ) {
    this.load("GET", endpoint, callback, options);
  }

  errorHandler<T>(res: ApiResponse<T>): ApiResponse<T> {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(
          `Sorry, but there is ${res.status} error: ${res.statusText}`
        );
      throw Error(res.statusText);
    }
    return res;
  }

  makeUrl(options: Record<string, string>, endpoint: string) {
    const urlOptions: Record<string, string> = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load<T>(
    method: string,
    endpoint: string,
    callback: (data: T) => void,
    options: Record<string, string> = {}
  ) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then((res: Response) => {
        if (!res.ok) {
          if (res.status === 401 || res.status === 404)
            console.log(
              `Sorry, but there is ${res.status} error: ${res.statusText}`
            );
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((data: T) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
