import CoinbaseTradeRequest from "../request";

export default class CurrenciesEndpoint {
  private instance: CoinbaseTradeRequest;

  constructor(instance: CoinbaseTradeRequest) {
    this.instance = instance;
  }
}
