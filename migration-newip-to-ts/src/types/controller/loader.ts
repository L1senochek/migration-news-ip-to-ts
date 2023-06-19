import { EndpointTypes } from './controller';

export enum HttpStatusCodesEnum {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
  CORS_PROBLEM = 0,
  OK = 200,
  CREATED = 201,
  TIME_OUT = 504,
}

export interface ResponseInterface {
  endpoint: EndpointTypes;
  options?: Record<string, string>;
}

export enum HttpMetodsEnum {
  CONNECT = 'CONNECT',
  DELETE = 'DELETE',
  GET = 'GET',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
  TRACE = 'TRACE',
}
