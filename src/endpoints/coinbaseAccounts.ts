import { ICoinbaseWallets, IGenerateCryptoAddressRequest } from "./models/coinbaseAccounts";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class CoinbaseAccountsEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  public async getAllCoinbaseWallets(): Promise<ICoinbaseWallets[]> {
    return await this.instance.request({
      path: Endpoints.getCoinbaseWallets,
    }) as ICoinbaseWallets[];
  }

  public async createCryptoAddress(accountId: string, body: IGenerateCryptoAddressRequest): Promise<ICoinbaseWallets[]> {
    return await this.instance.request({
      path: Endpoints.createCoinbaseWalletAddress.replace(":id", accountId),
      body: body,
      method: "POST"
    }) as ICoinbaseWallets[];
  }
}
