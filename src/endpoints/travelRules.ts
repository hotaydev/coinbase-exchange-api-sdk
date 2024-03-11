import CoinbaseTradeRequest from "../request";

export default class TravelRulesEndpoint {
  private instance: CoinbaseTradeRequest;

  constructor(instance: CoinbaseTradeRequest) {
    this.instance = instance;
  }
}
