import CoinbaseTradeRequest from "../request";

export default class CoinbaseAccountsEndpoint {
  private instance: CoinbaseTradeRequest;

  constructor(instance: CoinbaseTradeRequest) {
    this.instance = instance;
  }
}
