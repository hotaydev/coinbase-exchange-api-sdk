import CoinbaseTradeRequest from "../request";

export default class ConversionsEndpoint {
  private instance: CoinbaseTradeRequest;

  constructor(instance: CoinbaseTradeRequest) {
    this.instance = instance;
  }
}
