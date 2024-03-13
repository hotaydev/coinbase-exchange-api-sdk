import { ICoinbaseWallets, IGenerateCryptoAddressRequest, IGenerateCryptoAddressResponse } from "./models/coinbaseAccounts";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class CoinbaseAccountsEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  /**
   * Get all Coinbase wallets ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getcoinbaseaccounts))
   * @returns Promise<ICoinbaseWallets[]>
   */
  public async getAllCoinbaseWallets(): Promise<ICoinbaseWallets[]> {
    return await this.instance.request({
      path: Endpoints.getCoinbaseWallets,
    }) as ICoinbaseWallets[];
  }

  /**
   * Generate crypto address ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postcoinbaseaccountaddresses))
   * @returns Promise<IGenerateCryptoAddressResponse[]>
   */
  public async createCryptoAddress(accountId: string, body: IGenerateCryptoAddressRequest): Promise<IGenerateCryptoAddressResponse> {
    return await this.instance.request({
      path: Endpoints.createCoinbaseWalletAddress.replace(":id", accountId),
      body: body,
      method: "POST"
    }) as IGenerateCryptoAddressResponse;
  }
}
