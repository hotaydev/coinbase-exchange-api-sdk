import { IPagination } from "./_general";

export interface IAccount {
  id: string;
  currency: string;
  balance: string;
  hold: string;
  available: string;
  profile_id: string;
  trading_enabled: boolean;
  pending_deposit?: string;
  display_name?: string;
}

export interface IAccountHolds {
  id: string;
  created_at: string;
  updated_at?: string;
  type:
    | "order"
    | "transfer"
    | "funding"
    | "profile_transfer"
    | "otc_order"
    | "launch_sell"
    | "launch_buy"
    | "engine_credit_operation";
  ref: string;
  amount?: string;
}

export interface IAccountLedger {
  id: string;
  amount: string;
  created_at: string;
  balance: string;
  type:
    | "transfer"
    | "match"
    | "fee"
    | "conversion"
    | "margin_interest"
    | "rebate"
    | "otc_fee"
    | "otc_match"
    | "tax_credit"
    | "rfq_match"
    | "rfq_fee"
    | "match_conversion"
    | "stake_wrap"
    | "conversion_fee";
  details?: {
    to?: string;
    from?: string;
    profile_transfer_id?: string;
  };
}

export interface IAccountLedgerQueryParams extends IPagination {
  start_date?: string;
  end_date?: string;
  profile_id?: string;
}

export interface IAccountTransfers {
  id: string;
  type: ITransferTypes;
  created_at: string;
  completed_at: string;
  canceled_at?: string;
  processed_at?: string;
  amount: string;
  details?: {
    coinbase_account_id?: string;
    coinbase_transaction_id?: string;
    coinbase_payment_method_id?: string;
  };
  user_nonce?: number;
  currency: string;
}

export interface IAccountTransfersQueryParams extends IPagination {
  type?: ITransferTypes;
}

enum ITransferTypes {
  "deposit",
  "withdraw",
  "internal_deposit",
  "internal_withdraw",
}
