import { IPagination } from "./_general";

export interface IFill {
  trade_id: number;
  product_id: string;
  order_id: string;
  user_id: string;
  profile_id: string;
  liquidity: "M" | "T" | "O";
  price: string;
  size: string;
  fee: string;
  created_at: string;
  side: "buy" | "sell";
  settled: boolean;
  usd_volume: string;
  market_type: string;
  funding_currency: string;
}

export interface IGetAllFillsQueryParams extends IPagination {
  order_id?: string;
  product_id?: string;
  market_type?: string;
  start_date?: string;
  end_date?: string;
}

export interface IOrder {
  id: string;
  price: string;
  size: string;
  product_id: string;
  profile_id: string;
  side: "buy" | "sell";
  funds: string;
  specified_funds: string;
  type: "limit" | "market" | "stop";
  time_in_force: "GTC" | "GTT" | "IOC" | "FOK";
  expire_time: string;
  post_only: boolean;
  created_at: string;
  done_at: string;
  done_reason: string;
  reject_reason: string;
  fill_fees: string;
  filled_size: string;
  executed_value: string;
  status: "open" | "pending" | "rejected" | "done" | "active" | "received" | "all";
  settled: boolean;
  stop: "loss" | "entry";
  stop_price: string;
  funding_amount: string;
  client_oid: string;
  market_type: string;
  max_floor: string;
  secondary_order_id: string;
}

// The cancelation of a single orders is just a string, not a string array
export interface ICancelAllOrders extends Array<string> {}

export interface ICreateNewOrderRequest {
  profile_id: string;
  type: "limit" | "market" | "stop";
  side: "buy" | "sell";
  product_id: string;
  stp: "dc" | "co" | "cn" | "cb";
  stop: "loss" | "entry";
  stop_price: string;
  price: string;
  size: string;
  funds: string;
  time_in_force: "GTC" | "GTT" | "IOC" | "FOK";
  cancel_after: "min" | "hour" | "day";
  post_only: boolean;
  client_oid: string;
  max_floor: string;
}

export interface ICreateNewOrderResponse extends IOrder {}

export interface IGetAllOrdersQueryParams extends IPagination, ICancelSingleOrderQueryParams {
  profile_id?: string;
  product_id?: string;
  sortedBy?: "created_at" | "price" | "size" | "order_id" | "side" | "type";
  sorting?: "desc" | "asc";
  start_date?: string;
  end_date?: string;
  status?: string[];
}

export interface ICancelAllOrdersQueryParams {
  profile_id?: string;
  product_id?: string;
}

export interface ICancelSingleOrderQueryParams {
  market_type?: string;
}
