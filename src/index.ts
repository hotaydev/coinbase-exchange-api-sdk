import CoinbaseTradeRequest from "./request";
import { AccountEndpoint } from "./endpoints";

/// Use it like `const cb = new CoinbaseSDK({ key: "", secret: "", ... })`
export default class CoinbaseSDK {
  private instance = new CoinbaseTradeRequest();

  constructor({
    key, passphrase, secret, environment = "env"
  }: { key: string, passphrase: string, secret: string, environment: "env" | "prod" }) {
    this.instance.initialize({ key, passphrase, secret, environment });
  }

  get account(): AccountEndpoint {
    return new AccountEndpoint(this.instance);
  }
}