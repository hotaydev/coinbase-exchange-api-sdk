import { IDepositFromCoinbaseAccount, IDepositFromPaymentMethod, IDepositResponse, IFeeEstimate, IFeeEstimateRequestQueryParams, IPaymentMethods, ITransfer, ITransferQueryParams, ITravelInformationForTransfer, IWithdrawResponse, IWithdrawToCoinbaseAccount, IWithdrawToCryptoAddress, IWithdrawToPaymentMethod } from "./models/transfers";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";
import { IGeneralResponse } from "./models/_general";

export default class TransfersEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  public async getAllPaymentMethods(): Promise<IPaymentMethods[]> {
    return await this.instance.request({
      path: Endpoints.getPaymentMethods,
    }) as IPaymentMethods[];
  }

  public async getAllTransfers(query: ITransferQueryParams): Promise<ITransfer[]> {
    return await this.instance.request({
      path: Endpoints.getTransfers,
      query: query,
    }) as ITransfer[];
  }

  public async getSingleTransfer(transferId: string): Promise<ITransfer> {
    return await this.instance.request({
      path: Endpoints.getTransferById.replace(":id", transferId),
    }) as ITransfer;
  }

  public async getFeeEstimateForCryptoWithdrawal(query: IFeeEstimateRequestQueryParams): Promise<IFeeEstimate> {
    return await this.instance.request({
      path: Endpoints.getWithdrawFee,
      query: query,
    }) as IFeeEstimate;
  }

  public async depositFromCoinbaseAccount(body: IDepositFromCoinbaseAccount): Promise<IDepositResponse> {
    return await this.instance.request({
      path: Endpoints.createDepositFromCoinbaseAccount,
      method: "POST",
      body: body,
    }) as IDepositResponse;
  }

  public async depositFromPaymentMethod(body: IDepositFromPaymentMethod): Promise<IDepositResponse> {
    return await this.instance.request({
      path: Endpoints.createDepositFromPaymentMethod,
      method: "POST",
      body: body,
    }) as IDepositResponse;
  }

  public async submitTravelInformationForTransfer(transferId: string, body: ITravelInformationForTransfer): Promise<IGeneralResponse> {
    return await this.instance.request({
      path: Endpoints.createTransferTravelInformation.replace(":id", transferId),
      method: "POST",
      body: body,
    }) as IGeneralResponse;
  }

  public async withdrawToCoinbaseAccount(body: IWithdrawToCoinbaseAccount): Promise<IWithdrawResponse> {
    return await this.instance.request({
      path: Endpoints.createWithdrawToCoinbaseAccount,
      method: "POST",
      body: body,
    }) as IWithdrawResponse;
  }

  public async withdrawToCryptoAddress(body: IWithdrawToCryptoAddress): Promise<IWithdrawResponse> {
    return await this.instance.request({
      path: Endpoints.createWithdrawToCryptoAddress,
      method: "POST",
      body: body,
    }) as IWithdrawResponse;
  }

  public async withdrawToPaymentMethod(body: IWithdrawToPaymentMethod): Promise<IWithdrawResponse> {
    return await this.instance.request({
      path: Endpoints.createWithdrawToPaymentMethod,
      method: "POST",
      body: body,
    }) as IWithdrawResponse;
  }
}
