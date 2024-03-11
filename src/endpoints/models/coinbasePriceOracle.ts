export interface ISignedPrices {
  timestamp: string;
  signatures: string[];
  prices: object;
  messages: ("kind" | "timestamp" | "key" | "value")[];
}
