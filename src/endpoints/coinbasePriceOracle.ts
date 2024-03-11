import CoinbaseTradeRequest from "../request";

export default class CoinbasePriceOracleEndpoint {
  private instance: CoinbaseTradeRequest;

  constructor(instance: CoinbaseTradeRequest) {
    this.instance = instance;
  }
}
