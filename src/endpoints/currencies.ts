import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";
import { ICurrency } from "./models/currencies";

export default class CurrenciesEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  /**
   * Get all known currencies ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getcurrencies))
   * @returns Promise<ICurrency[]>
   */
  public async getAllKnownCurrencies(): Promise<ICurrency[]> {
    return await this.instance.request({
      path: Endpoints.getCurrencies,
    }) as ICurrency[];
  }

  /**
   * Get a currency ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getcurrency))
   * @returns Promise<ICurrency>
   */
  public async getSingleCurrency(currencyId: string): Promise<ICurrency> {
    return await this.instance.request({
      path: Endpoints.getCurrencyById.replace(":id", currencyId),
    }) as ICurrency;
  }
}
