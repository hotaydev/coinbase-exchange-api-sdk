import CoinbaseTradeRequest from "../request";

export default class ProfilesEndpoint {
  private instance: CoinbaseTradeRequest;

  constructor(instance: CoinbaseTradeRequest) {
    this.instance = instance;
  }
}
