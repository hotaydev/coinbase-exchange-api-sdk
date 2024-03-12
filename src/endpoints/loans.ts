import { ILendingOverview, ILoan, ILoanAssets, ILoanOptions, INewLoanPreview, INewLoanPreviewQueryParams, INewLoanRequest, INewLoanResponse, IRepayLoanPrincipalQueryParams, IRepayLoanPrincipalRequest, IRepayLoanPrincipalResponse } from "./models/loans";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class LoansEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  public async getAllLoans(ids?: string[]): Promise<ILoan[]> {
    return await this.instance.request({
      path: Endpoints.getLoans,
      query: ids && ids.length > 0 ? {ids: ids.join(",")} : undefined,
    }) as ILoan[];
  }

  public async getAllLoanAssets(): Promise<ILoanAssets> {
    return await this.instance.request({
      path: Endpoints.getLoansAssets,
    }) as ILoanAssets;
  }

  public async getLendingOverview(): Promise<ILendingOverview> {
    return await this.instance.request({
      path: Endpoints.getLoansLendingOverview,
    }) as ILendingOverview;
  }

  public async getNewLoanPreview(query?: INewLoanPreviewQueryParams): Promise<INewLoanPreview> {
    return await this.instance.request({
      path: Endpoints.getLoanPreview,
      query: query,
    }) as INewLoanPreview;
  }

  public async openNewLoan(body: INewLoanRequest): Promise<INewLoanResponse> {
    return await this.instance.request({
      path: Endpoints.createLoan,
      method: "POST",
      body: body,
    }) as INewLoanResponse;
  }

  public async getNewLoanOptions(): Promise<ILoanOptions[]> {
    return await this.instance.request({
      path: Endpoints.getLoansOptions,
    }) as ILoanOptions[];
  }

  public async repayLoanPrincipal(body: IRepayLoanPrincipalRequest): Promise<IRepayLoanPrincipalResponse> {
    return await this.instance.request({
      path: Endpoints.createLoanRepay,
      method: "POST",
      body: body,
    }) as IRepayLoanPrincipalResponse;
  }

  public async getLoanRepaymentPreview(query?: IRepayLoanPrincipalQueryParams): Promise<INewLoanPreview> {
    return await this.instance.request({
      path: Endpoints.getLoanPreview,
      query: query,
    }) as INewLoanPreview;
  }
}
