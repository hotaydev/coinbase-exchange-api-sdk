import { IAccount, IAccountHolds, IAccountLedger, IAccountLedgerQueryParams, IAccountTransfers, IAccountTransfersQueryParams } from "./models/account";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";
import { IPagination } from "./models/_general";

export default class AccountEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  public async getAllAccounts(): Promise<IAccount[]> {
    return await this.instance.request({
      path: Endpoints.getAccounts,
    }) as IAccount[];
  }

  public async getSingleAccount(accountId: string): Promise<IAccount> {
    return await this.instance.request({
      path: Endpoints.getAccountById.replace(":id", accountId),
    }) as IAccount;
  }

  public async getAccountHolds(accountId: string, query: IPagination): Promise<IAccountHolds[]> {
    return await this.instance.request({
      path: Endpoints.getAccountHolds.replace(":id", accountId),
      query: query,
    }) as IAccountHolds[];
  }

  public async getAccountLedgers(accountId: string, query: IAccountLedgerQueryParams): Promise<IAccountLedger[]> {
    return await this.instance.request({
      path: Endpoints.getAccountLedgers.replace(":id", accountId),
      query: query,
    }) as IAccountLedger[];
  }

  public async getAccountTransfers(accountId: string, query: IAccountTransfersQueryParams): Promise<IAccountTransfers[]> {
    return await this.instance.request({
      path: Endpoints.getAccountTransfers.replace(":id", accountId),
      query: query,
    }) as IAccountTransfers[];
  }
}
