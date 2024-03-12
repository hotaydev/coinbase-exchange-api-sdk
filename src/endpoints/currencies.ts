import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";
import { ICurrency } from "./models/currencies";

export default class CurrenciesEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  public async getAllKnownCurrencies(): Promise<ICurrency[]> {
    return await this.instance.request({
      path: Endpoints.getCurrencies,
    }) as ICurrency[];
  }

  public async getSingleCurrency(currencyId: string): Promise<ICurrency[]> {
    return await this.instance.request({
      path: Endpoints.getCurrencyById.replace(":id", currencyId),
    }) as ICurrency[];
  }
}
