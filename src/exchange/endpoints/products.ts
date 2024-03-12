import CoinbaseExchangeApiRequest from "../request";

export default class ProductsEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }
}
