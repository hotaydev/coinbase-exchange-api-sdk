export interface ISingleProduct {
  id: string;
  base_currency: string;
  quote_currency: string;
  quote_increment: string;
  base_increment: string;
  display_name: string;
  min_market_funds: string;
  margin_enabled: boolean;
  post_only: boolean;
  limit_only: boolean;
  cancel_only: boolean;
  status: "online" | "offline" | "internal" | "delisted";
  status_message: string;
  trading_disabled: boolean;
  fx_stablecoin: boolean;
  max_slippage_percentage: string;
  auction_mode: boolean;
  high_bid_limit_percentage: string;
}

export interface IProductBook {
  bids: object | Array<string | number>;
  asks: object | Array<string | number>;
  sequence: number;
  auction_mode: boolean;
  auction: {
    open_price: string;
    open_size: string;
    best_bid_price: string;
    best_bid_size: string;
    best_ask_price: string;
    best_ask_size: string;
    auction_state: string;
    can_open: string;
    time: string;
  };
  time: string;
}

// Lacks documentation of this response
export interface IProductCandles {
  time: string;
  low: string;
  high: string;
  open: string;
  close: string;
  volume: string;
}

export interface IProductStats {
  low: string;
  high: string;
  open: string;
  volume: string;
  last: string;
  volume_30day?: string;
}

export interface IProductTicker {
  ask: string;
  bid: string;
  volume: string;
  trade_id: number;
  price: string;
  size: string;
  time: string;
}

export interface IProductTrades {
  trade_id: number;
  side: "buy" | "sell";
  size: string;
  price: string;
  time: string;
}