import {
  IAccount,
  IAccountHolds,
  IAccountLedger,
  IAccountLedgerQueryParams,
  IAccountTransfers,
  IAccountTransfersQueryParams,
} from "./models/account";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";
import { IPagination } from "./models/_general";

export default class AccountEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  /**
   * Get all accounts for a profile ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaccounts))
   * @returns Promise<IAccount[]>
   */
  public async getAllAccounts(): Promise<IAccount[]> {
    return (await this.instance.request({
      path: Endpoints.getAccounts,
    })) as IAccount[];
  }

  /**
   * Get a single account by id ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaccount))
   * @returns Promise<IAccount>
   */
  public async getSingleAccount(accountId: string): Promise<IAccount> {
    return (await this.instance.request({
      path: Endpoints.getAccountById.replace(":id", accountId),
    })) as IAccount;
  }

  /**
   * Get a single account's holds ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaccountholds))
   * @returns Promise<IAccountHolds[]>
   */
  public async getAccountHolds(
    accountId: string,
    query: IPagination,
  ): Promise<IAccountHolds[]> {
    return (await this.instance.request({
      path: Endpoints.getAccountHolds.replace(":id", accountId),
      query: query,
    })) as IAccountHolds[];
  }

  /**
   * Get a single account's ledger ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaccountledger))
   * @returns Promise<IAccountLedger[]>
   */
  public async getAccountLedgers(
    accountId: string,
    query: IAccountLedgerQueryParams,
  ): Promise<IAccountLedger[]> {
    return (await this.instance.request({
      path: Endpoints.getAccountLedgers.replace(":id", accountId),
      query: query,
    })) as IAccountLedger[];
  }

  /**
   * Get a single account's transfers ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaccounttransfers))
   * @returns Promise<IAccountTransfers[]>
   */
  public async getAccountTransfers(
    accountId: string,
    query: IAccountTransfersQueryParams,
  ): Promise<IAccountTransfers[]> {
    return (await this.instance.request({
      path: Endpoints.getAccountTransfers.replace(":id", accountId),
      query: query,
    })) as IAccountTransfers[];
  }
}
