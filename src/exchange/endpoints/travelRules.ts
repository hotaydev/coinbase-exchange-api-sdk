import CoinbaseExchangeApiRequest from "../request";

export default class TravelRulesEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }
}
