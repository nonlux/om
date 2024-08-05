export abstract class ApiException extends Error {
  response: Response;
  status: number;
  data: string;
  abstract get message(): string;
  constructor(response: Response, data: string) {
    super();
    this.response = response;
    this.status = this.response.status;
    this.data = data;
  }
}

export class NoJsonApiException extends ApiException {
  get message() {
    return `No JSON response for url ${this.response.url} - ${this.status} - ${this.response.statusText}: ${this.data}`;
  }
}

export class NotFoundApiException extends ApiException {
  get message() {
    return `Not found for url ${this.response.url} - ${this.status} - ${this.response.statusText}: ${this.data}`;
  }
}

export class UnknownApiException extends ApiException {
  get message() {
    return `Unknown error for url ${this.response.url} - ${this.status} - ${this.response.statusText}: ${this.data}`;
  }
}
