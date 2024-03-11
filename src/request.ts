import "isomorphic-fetch";
import { createHmac } from "node:crypto";

export default class CoinbaseTradeRequest {
  private api: string = "";
  private cb_secret: string = "";
  private cb_passphrase: string = "";
  private cb_key: string = "";

  private getTimestamp(): number {
    return Date.now() / 1000;
  }

  private startWithSlash(path: string): string {
    return path.startsWith("/") ? path : `/${path}`;
  }

  private getSign(
    timestamp: number,
    method: string,
    path: string,
    body: object,
  ): string {
    const message = timestamp + method + path + body;
    const key = Buffer.from(this.cb_secret, "base64");
    const hmac = createHmac("sha256", key);
    return hmac.update(message).digest("base64");
  }

  public initialize({
    key,
    passphrase,
    secret,
    environment,
  }: {
    key: string;
    passphrase: string;
    secret: string;
    environment: "env" | "prod";
  }) {
    this.cb_secret = secret;
    this.cb_passphrase = passphrase;
    this.cb_key = key;

    if (environment === "prod") {
      this.api = "https://api.exchange.coinbase.com";
    } else {
      this.api = "https://api-public.sandbox.exchange.coinbase.com";
    }
  }

  public async request(
    method: string,
    path: string,
    body: object,
  ): Promise<unknown> {
    const timestamp = this.getTimestamp();
    const sign = this.getSign(
      timestamp,
      method,
      this.startWithSlash(path),
      body,
    );

    try {
      const response = await fetch(this.api + this.startWithSlash(path), {
        method: method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "CB-ACCESS-KEY": this.cb_key,
          "CB-ACCESS-SIGN": sign,
          "CB-ACCESS-TIMESTAMP": timestamp.toString(),
          "CB-ACCESS-PASSPHRASE": this.cb_passphrase,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      // TODO: handle this error
      console.log(error);
      return error;
    }
  }
}
