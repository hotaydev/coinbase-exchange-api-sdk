import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";
import { IFee } from "./models/fees";

export default class FeesEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  public async getFees(): Promise<IFee[]> {
    return await this.instance.request({
      path: Endpoints.getFees,
    }) as IFee[];
  }
}
