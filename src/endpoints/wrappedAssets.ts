import CoinbaseTradeRequest from "../request";

export default class WrappedAssetsEndpoint {
  private instance: CoinbaseTradeRequest;

  constructor(instance: CoinbaseTradeRequest) {
    this.instance = instance;
  }
}
