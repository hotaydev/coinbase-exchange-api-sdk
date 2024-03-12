import CoinbaseExchangeApiRequest from "../request";

export default class ProfilesEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }
}
