import CoinbaseTradeRequest from "../request";

export default class AccountEndpoint {
  private instance: CoinbaseTradeRequest;

  constructor(instance: CoinbaseTradeRequest) {
    this.instance = instance;
  }
}
