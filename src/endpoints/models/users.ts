export interface IUser {
  transfer_limits: {
    buy?: object;
    sell?: object;
    exchange_withdraw?: object;
    ach?: object;
    ach_no_balance?: object;
    credit_debit_card?: object;
    secure3d_buy?: object;
    paypal_buy?: object;
    paypal_withdrawal?: object;
    ideal_deposit?: object;
    sofort_deposit?: object;
    instant_ach_withdrawal?: object;
  };
  limit_currency: string;
}

export interface IUserUpdateSettlementRequest extends IUserUpdateSettlementResponse {
  user_id: string;
}

export interface IUserUpdateSettlementResponse {
  settlement_preference: "USD" | "USDC" | "opt-out";
}