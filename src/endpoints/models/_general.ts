export interface IGeneralResponse {
  message: string;
}

export interface IPagination {
  before?: string;
  after?: string;
  limit?: number;
}