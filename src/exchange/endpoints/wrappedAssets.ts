import CoinbaseExchangeApiRequest from "../request";

export default class WrappedAssetsEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }
}
