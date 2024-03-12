import { IPagination } from "./_general";

export interface IReport {
  id: string;
  type: string;
  created_at: string;
  completed_at: string;
  expires_at: string;
  status: "pending" | "creating" | "ready" | "failed";
  user_id: string;
  file_url: string;
  file_count: number;
  params: {
    start_date: string;
    end_date: string;
    format: "pdf" | "csv";
    product_id: string;
    account_id: string;
    profile_id: string;
    email: string;
    new_york_state: boolean;
    datetime: string;
    group_by_profile: boolean;
    user: {
      id: string;
      created_at: string;
      active_at: string;
      name: string;
      email: string;
      roles: object[];
      is_banned: boolean;
      user_type: string;
      fulfills_new_requirements: boolean;
      flags: object;
      details: object;
      preferences: object;
      has_default: boolean;
      state_code: string;
      cb_data_from_cache: boolean;
      two_factor_method: string;
      legal_name: string;
      terms_accepted: string;
      has_clawback_payment_pending: boolean;
      has_restricted_assets: boolean;
    };
  };
}

export interface IReportQueryParams extends IPagination {
  profile_id: string;
  ignore_expired: boolean;
  type: "account" | "balance" | "fills" | "otc-fills" | "rfq-fills" | "tax-invoice" | "1099k-transaction-history";
}

export interface IReportCreate {
  type: "account" | "balance" | "fills" | "otc-fills" | "rfq-fills" | "tax-invoice" | "1099k-transaction-history";
  year: string;
  format: "pdf" | "csv";
  email: string;
  profile_id: string;
  balance: {
    datetime: string;
    group_by_profile: boolean;
  };
  fills: {
    start_date: string;
    end_date: string;
    product_id: string;
  };
  account: {
    start_date: string;
    end_date: string;
    account_id: string;
  };
  "otc-fills": {
    start_date: string;
    end_date: string;
    product_id: string;
  };
  "tax-invoice": {
    start_date: string;
    end_date: string;
    product_id: string;
  };
  "rfq-fills": {
    start_date: string;
    end_date: string;
    product_id: string;
  };
}

export interface IReportCreated {
  id: string;
  type: string;
  status: "pending";
}