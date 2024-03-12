import CoinbaseExchangeApiRequest from "../request";

export default class TransfersEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }
}
