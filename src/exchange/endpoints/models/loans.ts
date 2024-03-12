/* eslint-disable max-lines */
export interface ILoan {
  id: string;
  currency: string;
  principal_amount: string;
  outstanding_principal_amount: string;
  interest_rate: string;
  interest_currency: string;
  status: "loan_pending" | "loan_active" | "loan_canceled" | "loan_closed";
  effective_at: string;
  closed_at: string;
  term_start_date: string;
  term_end_date: string;
}

export interface ILoanAssets {
  collateral_assets: object;
  diversification_ratio: string;
  borrowable_assets: string[];
}

export interface ILendingOverview {
  overview: _ISingleLoanContent;
  loans: ILoan[];
}

export interface INewLoanPreview {
  before: _ISingleLoanContent;
  after: _ISingleLoanContent;
}

export interface INewLoanPreviewQueryParams {
  currency: string;
  native_amount: string;
}

export interface INewLoanRequest {
  loan_id: string;
  currency: string;
  native_amount: string;
  interest_rate: string;
  term_start_date: string;
  term_end_date: string;
  profile_id: string;
}

export interface INewLoanResponse {
  loan: ILoan;
}

export interface ILoanOptions {
  currency: string;
  max_principal_amount: {
    native: string;
    notional: string;
  };
  interest_rate: string;
}

export interface IRepayLoanPrincipalRequest {
  loan_id: string;
  idem: string;
  from_profile_id: string;
  currency: string;
  native_amount: string;
}

export interface IRepayLoanPrincipalQueryParams {
  loan_id: string;
  currency: string;
  native_amount: string;
}

export interface IRepayLoanPrincipalResponse {
  repayment: {
    id: string;
    loan_id: string;
    native_amount: string;
    initial_native_amount: string;
    status:
      | "REPAYMENT_UNSET"
      | "REPAYMENT_PENDING"
      | "REPAYMENT_COMPLETED"
      | "REPAYMENT_CANCELLED"
      | "REPAYMENT_EXPIRED"
      | "REPAYMENT_COMMITTED"
      | "REPAYMENT_REJECTED";
    type:
      | "REPAYMENT_TYPE_UNSET"
      | "PRINCIPAL_RETURN"
      | "PRINCIPAL_RECALL"
      | "INTEREST_PAYMENT";
  };
}

export interface IPrincipalRepaymentPreview {
  before: _ISingleLoanContent;
  after: _ISingleLoanContent;
}

interface _ISingleLoanContent {
  open_loan_value: string;
  collateral_value: string;
  collateralization_percentage: string;
  available_to_borrow: string;
  available_per_asset: object;
  withdrawal_restricted: boolean;
  credit_limit_value: string;
  available_credit_value: string;
  collateralization_percentage_open_only: string;
  pending_loan_value: string;
  initial_margin_percentage: string;
  minimum_margin_percentage: string;
  unlock_margin_percentage: string;
}
