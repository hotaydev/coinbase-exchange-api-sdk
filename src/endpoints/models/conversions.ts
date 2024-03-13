export interface IConvertCurrencyRequest {
  profile_id: string;
  from: string;
  to: string;
  amount: string;
  nonce: string;
}

export interface IConvertCurrencyResponse {
  id: string;
  amount: string;
  from_account_id: string;
  to_account_id: string;
  from: string;
  to: string;
  fee_amount: string;
}

export interface IConversionRate {
  from_currency: string;
  to_currency: string;
  min_fee_rate: string;
  thirty_day_net_volume: string;
  fee_tiers: {
    from_amount: string;
    to_amount: string;
    fee_rate: string;
  }[];
}

export interface IGetConversion {
  id: string;
  amount: string;
  from_account_id: string;
  to_account_id: string;
  from: string;
  to: string;
  fee_amount: string;
}

export interface IGetConversionQueryParams {
  profile_id: string;
}
