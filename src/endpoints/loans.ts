import {
  ILendingOverview,
  ILoan,
  ILoanAssets,
  ILoanInterestSummaries,
  ILoanOptions,
  ILoansInterestCharges,
  ILoansInterestRateHistory,
  INewLoanPreview,
  INewLoanPreviewQueryParams,
  INewLoanRequest,
  INewLoanResponse,
  IRepayLoanInterestRequest,
  IRepayLoanInterestResponse,
  IRepayLoanPrincipalQueryParams,
  IRepayLoanPrincipalRequest,
  IRepayLoanPrincipalResponse,
} from "./models/loans";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class LoansEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  /**
   * List loans ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getloans))
   * @returns Promise<ILoan[]>
   */
  public async getAllLoans(ids?: string[]): Promise<ILoan[]> {
    return (await this.instance.request({
      path: Endpoints.getLoans,
      query: ids && ids.length > 0 ? { ids: ids.join(",") } : undefined,
    })) as ILoan[];
  }

  /**
   * Get all interest summaries ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getinterestsummary))
   * @returns Promise<ILoanInterestSummaries[]>
   */
  public async getAllLoansInterestSummaries(): Promise<
    ILoanInterestSummaries[]
    > {
    return (await this.instance.request({
      path: Endpoints.getLoansInterestSummaries,
    })) as ILoanInterestSummaries[];
  }

  /**
   * Get a single loan's interest rate history ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getinteresthistory))
   * @returns Promise<ILoansInterestRateHistory[]>
   */
  public async getSingleLoanInterestRateHistory(
    loanId: string,
  ): Promise<ILoansInterestRateHistory[]> {
    return (await this.instance.request({
      path: Endpoints.getLoanInterestRateHistory.replace(":id", loanId),
    })) as ILoansInterestRateHistory[];
  }

  /**
   * Get a single loan's interest charges ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getinterestcharges))
   * @returns Promise<ILoansInterestCharges[]>
   */
  public async getSingleLoanInterestCharges(
    loanId: string,
  ): Promise<ILoansInterestCharges[]> {
    return (await this.instance.request({
      path: Endpoints.getLoanInterestCharges.replace(":id", loanId),
    })) as ILoansInterestCharges[];
  }

  /**
   * List loan assets ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getloanassets))
   * @returns Promise<ILoanAssets>
   */
  public async getAllLoanAssets(): Promise<ILoanAssets> {
    return (await this.instance.request({
      path: Endpoints.getLoansAssets,
    })) as ILoanAssets;
  }

  /**
   * Get lending overview ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getloanlendingoverview))
   * @returns Promise<ILendingOverview>
   */
  public async getLendingOverview(): Promise<ILendingOverview> {
    return (await this.instance.request({
      path: Endpoints.getLoansLendingOverview,
    })) as ILendingOverview;
  }

  /**
   * Get new loan preview ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getloanpreview))
   * @returns Promise<INewLoanPreview>
   */
  public async getNewLoanPreview(
    query?: INewLoanPreviewQueryParams,
  ): Promise<INewLoanPreview> {
    return (await this.instance.request({
      path: Endpoints.getLoanPreview,
      query: query,
    })) as INewLoanPreview;
  }

  /**
   * Open new loan ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_openloan))
   * @returns Promise<INewLoanResponse>
   */
  public async openNewLoan(body: INewLoanRequest): Promise<INewLoanResponse> {
    return (await this.instance.request({
      path: Endpoints.createLoan,
      method: "POST",
      body: body,
    })) as INewLoanResponse;
  }

  /**
   * List new loan options ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getnewloanoptions))
   * @returns Promise<ILoanOptions[]>
   */
  public async getNewLoanOptions(): Promise<ILoanOptions[]> {
    return (await this.instance.request({
      path: Endpoints.getLoansOptions,
    })) as ILoanOptions[];
  }

  /**
   * Repay loan principal ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_repayprincipal))
   * @returns Promise<IRepayLoanPrincipalResponse>
   */
  public async repayLoanPrincipal(
    body: IRepayLoanPrincipalRequest,
  ): Promise<IRepayLoanPrincipalResponse> {
    return (await this.instance.request({
      path: Endpoints.createLoanPrincipalRepay,
      method: "POST",
      body: body,
    })) as IRepayLoanPrincipalResponse;
  }

  /**
   * Repay loan interest ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_repayinterest))
   * @returns Promise<IRepayLoanInterestResponse>
   */
  public async repayLoanInterest(
    body: IRepayLoanInterestRequest,
  ): Promise<IRepayLoanInterestResponse> {
    return (await this.instance.request({
      path: Endpoints.createLoanInterestRepay,
      method: "POST",
      body: body,
    })) as IRepayLoanInterestResponse;
  }

  /**
   * Get principal repayment preview ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getrepaymentpreview))
   * @returns Promise<INewLoanPreview>
   */
  public async getLoanRepaymentPreview(
    query?: IRepayLoanPrincipalQueryParams,
  ): Promise<INewLoanPreview> {
    return (await this.instance.request({
      path: Endpoints.getLoanPreview,
      query: query,
    })) as INewLoanPreview;
  }
}
