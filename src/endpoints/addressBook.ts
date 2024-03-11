import CoinbaseTradeRequest from "../request";

export default class AddressBookEndpoint {
  private instance: CoinbaseTradeRequest;

  constructor(instance: CoinbaseTradeRequest) {
    this.instance = instance;
  }
}
