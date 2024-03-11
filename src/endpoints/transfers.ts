import CoinbaseTradeRequest from "../request";

export default class TransfersEndpoint {
  private instance: CoinbaseTradeRequest;

  constructor(instance: CoinbaseTradeRequest) {
    this.instance = instance;
  }
}
