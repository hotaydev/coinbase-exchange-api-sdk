import { IPagination } from "./_general";

/* eslint-disable max-lines */
export interface IDepositFromCoinbaseAccount extends _IDepositRequest {
  coinbase_account_id: string;
}

export interface IWithdrawToCoinbaseAccount
  extends IDepositFromCoinbaseAccount {}

export interface IWithdrawToPaymentMethod extends IDepositFromPaymentMethod {}

export interface IDepositFromPaymentMethod extends _IDepositRequest {
  payment_method_id: string;
}

interface _IDepositRequest {
  profile_id: string;
  amount: string;
  currency: string;
}

export interface IDepositResponse {
  id: string;
  amount: string;
  currency: string;
  payout_at: string;
  fee: string;
  subtotal: string;
}

export interface IWithdrawResponse extends IDepositResponse {}

export interface IPaymentMethods {
  id: string;
  type: string;
  name: string;
  currency: string;
  primary_buy: boolean;
  primary_sell: boolean;
  instant_buy: boolean;
  instant_sell: boolean;
  created_at: string;
  updated_at: string;
  resource: string;
  resource_path: string;
  verified: boolean;
  limits: {
    type: string;
    name: string;
  };
  allow_buy: boolean;
  allow_sell: boolean;
  allow_deposit: boolean;
  allow_withdraw: boolean;
  hold_business_days: number;
  hold_days: number;
  verificationMethod: string;
  cdvStatus: string;
  fiat_account: {
    id: string;
    resource: string;
    resource_path: string;
  };
  crypto_account: {
    id: string;
    resource: string;
    resource_path: string;
  };
  recurring_options: {
    period: string;
    label: string;
  }[];
  available_balance: {
    amount: string;
    currency: string;
    scale: string;
  };
  picker_data: {
    symbol: string;
    customer_name: string;
    account_name: string;
    account_number: string;
    account_type: string;
    institution_code: string;
    institution_name: string;
    iban: string;
    swift: string;
    paypal_email: string;
    paypal_owner: string;
    routing_number: string;
    institution_identifier: string;
    bank_name: string;
    branch_name: string;
    icon_url: string;
    balance: {
      amount: string;
      currency: string;
    };
  };
}

export interface ITransfer {
  id: string;
  type: "deposit" | "withdraw" | "internal_deposit" | "internal_withdraw";
  created_at: string;
  completed_at: string;
  canceled_at: string;
  processed_at: string;
  amount: string;
  details?: {
    coinbase_account_id?: string;
    coinbase_transaction_id?: string;
    coinbase_payment_method_id?: string;
  };
  user_nonce: number;
  currency: string;
}

export interface ITransferQueryParams extends IPagination {
  profile_id: string;
  type: "deposit" | "withdraw" | "internal_deposit" | "internal_withdraw";
  currency_type: "crypto" | "fiat";
  transfer_reason: "usdc_reward";
  currency: string;
}

export interface ITravelInformationForTransfer {
  transfer_id: string;
  originator_name: string;
  originator_country: string;
}

export interface IWithdrawToCryptoAddress {
  profile_id: string;
  amount: string;
  currency: string;
  crypto_address: string;
  destination_tag: string;
  no_destination_tag: boolean;
  nonce: number;
  network: string;
  add_network_fee_to_total: boolean;
  is_intermediary: boolean;
  intermediary_jurisdiction: string;
  travel_rule_data: {
    originator_name: string;
    originator_natural_name: {
      first_name: string;
      last_name: string;
    };
    originator_address: {
      address_1: string;
      address_2: string;
      address_3: string;
      city: string;
      state: string;
      country: string;
      postal_code: string;
    };
    originator_telephone_number: string;
    originator_account: string;
    originator_account_location_country_code: string;
    originator_date_of_birth: {
      year: number;
      month: number;
      day: number;
    };
    originator_account_number: string;
    transfer_purpose: string;
    beneficiary_name: string;
    beneficiary_address: {
      address_1: string;
      address_2: string;
      address_3: string;
      city: string;
      state: string;
      country: string;
      postal_code: string;
    };
    beneficiary_telephone_number: string;
    beneficiary_account_location: string;
    beneficiary_date_of_birth: {
      year: number;
      month: number;
      day: number;
    };
    beneficiary_financial_institution: string;
    is_self: boolean;
    originator_wallet_address: string;
  };
}

export interface IFeeEstimateRequestQueryParams {
  currency: string;
  crypto_address: string;
  network: string;
}

export interface IFeeEstimate {
  fee: string;
  fee_before_subsidy: string;
}
