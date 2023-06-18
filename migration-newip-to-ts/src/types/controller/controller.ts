export enum EndpointTypes {
  Sources = 'sources',
  Everything = 'everything',
  TopHeadlines = 'top-headlines',
}

export type Callback<T> = (data?: T) => void;
