import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";
import { ISignedPrices } from "./models/coinbasePriceOracle";

export default class CoinbasePriceOracleEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  public async getSignedPrices(): Promise<ISignedPrices> {
    return await this.instance.request({
      path: Endpoints.getOraclePrices,
    }) as ISignedPrices;
  }
}
