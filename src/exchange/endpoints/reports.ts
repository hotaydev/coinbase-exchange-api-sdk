import CoinbaseExchangeApiRequest from "../request";

export default class ReportsEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }
}
