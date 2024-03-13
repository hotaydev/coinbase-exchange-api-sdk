import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";
import { IFee } from "./models/fees";

export default class FeesEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  /**
   * Get fees ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getfees))
   * @returns Promise<IFee[]>
   */
  public async getFees(): Promise<IFee[]> {
    return (await this.instance.request({
      path: Endpoints.getFees,
    })) as IFee[];
  }
}
