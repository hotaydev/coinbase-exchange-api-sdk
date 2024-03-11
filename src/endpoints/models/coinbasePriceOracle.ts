export interface SignedPrices {
  timestamp: string;
  signatures: string[];
  prices: object;
  messages: ("kind" | "timestamp" | "key" | "value")[];
}
