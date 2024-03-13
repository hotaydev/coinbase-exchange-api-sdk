import { IDepositFromCoinbaseAccount, IDepositFromPaymentMethod, IDepositResponse, IFeeEstimate, IFeeEstimateRequestQueryParams, IPaymentMethods, ITransfer, ITransferQueryParams, ITravelInformationForTransfer, IWithdrawResponse, IWithdrawToCoinbaseAccount, IWithdrawToCryptoAddress, IWithdrawToPaymentMethod } from "./models/transfers";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";
import { IGeneralResponse } from "./models/_general";

export default class TransfersEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  /**
   * Get all payment methods ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getpaymentmethods))
   * @returns Promise<IPaymentMethods[]>
   */
  public async getAllPaymentMethods(): Promise<IPaymentMethods[]> {
    return await this.instance.request({
      path: Endpoints.getPaymentMethods,
    }) as IPaymentMethods[];
  }

  /**
   * Get all transfers ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_gettransfers))
   * @returns Promise<ITransfer[]>
   */
  public async getAllTransfers(query: ITransferQueryParams): Promise<ITransfer[]> {
    return await this.instance.request({
      path: Endpoints.getTransfers,
      query: query,
    }) as ITransfer[];
  }

  /**
   * Get a single transfer ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_gettransfer))
   * @returns Promise<ITransfer>
   */
  public async getSingleTransfer(transferId: string): Promise<ITransfer> {
    return await this.instance.request({
      path: Endpoints.getTransferById.replace(":id", transferId),
    }) as ITransfer;
  }

  /**
   * Get fee estimate for crypto withdrawal ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getwithdrawfeeestimate))
   * @returns Promise<IFeeEstimate>
   */
  public async getFeeEstimateForCryptoWithdrawal(query: IFeeEstimateRequestQueryParams): Promise<IFeeEstimate> {
    return await this.instance.request({
      path: Endpoints.getWithdrawFee,
      query: query,
    }) as IFeeEstimate;
  }

  /**
   * Deposit from Coinbase account ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postdepositcoinbaseaccount))
   * @returns Promise<IDepositResponse>
   */
  public async depositFromCoinbaseAccount(body: IDepositFromCoinbaseAccount): Promise<IDepositResponse> {
    return await this.instance.request({
      path: Endpoints.createDepositFromCoinbaseAccount,
      method: "POST",
      body: body,
    }) as IDepositResponse;
  }

  /**
   * Deposit from payment method ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postdepositpaymentmethod))
   * @returns Promise<IDepositResponse>
   */
  public async depositFromPaymentMethod(body: IDepositFromPaymentMethod): Promise<IDepositResponse> {
    return await this.instance.request({
      path: Endpoints.createDepositFromPaymentMethod,
      method: "POST",
      body: body,
    }) as IDepositResponse;
  }

  /**
   * Submit travel information for a transfer ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_posttransfertravelrule))
   * @returns Promise<IGeneralResponse>
   */
  public async submitTravelInformationForTransfer(transferId: string, body: ITravelInformationForTransfer): Promise<IGeneralResponse> {
    return await this.instance.request({
      path: Endpoints.createTransferTravelInformation.replace(":id", transferId),
      method: "POST",
      body: body,
    }) as IGeneralResponse;
  }

  /**
   * Withdraw to Coinbase account ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postwithdrawcoinbaseaccount))
   * @returns Promise<IWithdrawResponse>
   */
  public async withdrawToCoinbaseAccount(body: IWithdrawToCoinbaseAccount): Promise<IWithdrawResponse> {
    return await this.instance.request({
      path: Endpoints.createWithdrawToCoinbaseAccount,
      method: "POST",
      body: body,
    }) as IWithdrawResponse;
  }

  /**
   * Withdraw to crypto address ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postwithdrawcrypto))
   * @returns Promise<IWithdrawResponse>
   */
  public async withdrawToCryptoAddress(body: IWithdrawToCryptoAddress): Promise<IWithdrawResponse> {
    return await this.instance.request({
      path: Endpoints.createWithdrawToCryptoAddress,
      method: "POST",
      body: body,
    }) as IWithdrawResponse;
  }

  /**
   * Withdraw to payment method ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postwithdrawpaymentmethod))
   * @returns Promise<IWithdrawResponse>
   */
  public async withdrawToPaymentMethod(body: IWithdrawToPaymentMethod): Promise<IWithdrawResponse> {
    return await this.instance.request({
      path: Endpoints.createWithdrawToPaymentMethod,
      method: "POST",
      body: body,
    }) as IWithdrawResponse;
  }
}
