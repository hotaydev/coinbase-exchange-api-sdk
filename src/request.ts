import "isomorphic-fetch";
import { createHmac } from "node:crypto";

export default class CoinbaseExchangeApiRequest {
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
    body?: object,
  ): string {
    const firstPartOfTheMessage = timestamp + method + path;
    const message = body
      ? firstPartOfTheMessage + JSON.stringify(body)
      : firstPartOfTheMessage;
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

  public async request({
    method = "GET",
    path,
    body,
    query,
  }: {
    method?: "GET" | "POST" | "DELETE" | "PUT";
    path: string;
    body?: object;
    query?: object;
  }): Promise<unknown> {
    const timestamp = this.getTimestamp();
    const sign = this.getSign(
      timestamp,
      method,
      this.startWithSlash(path),
      body,
    );

    const response = await fetch(
      this.api + this.startWithSlash(path) + this.objectToQueryString(query),
      {
        method: method,
        body: body ? JSON.stringify(body) : null,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "CB-ACCESS-KEY": this.cb_key,
          "CB-ACCESS-SIGN": sign,
          "CB-ACCESS-TIMESTAMP": timestamp.toString(),
          "CB-ACCESS-PASSPHRASE": this.cb_passphrase,
        },
      },
    );

    const data = await response.json();
    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private objectToQueryString(data: any): string {
    if (data) {
      return (
        "?" +
        Object.keys(data)
          .map(
            (key) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
          )
          .join("&")
      );
    }

    return "";
  }
}
