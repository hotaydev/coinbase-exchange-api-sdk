export interface ICurrency {
  id: string;
  name: string;
  min_size: string;
  status: string;
  message: string;
  max_precision: string;
  convertible_to: string[];
  details: {
    type: "crypto" | "fiat";
    symbol: string;
    network_confirmations: number;
    sort_order: number;
    crypto_address_link: string;
    crypto_transaction_link: string;
    push_payment_methods: string[];
    group_types: string[];
    display_name: string;
    processing_time_seconds: number;
    min_withdrawal_amount: number;
    max_withdrawal_amount: number;
  };
  default_network: string;
  display_name: string;
  supported_networks: {
    id: string;
    name: string;
    status: string;
    contract_address: string;
    crypto_address_link: string;
    crypto_transaction_link: string;
    min_withdrawal_amount: number;
    max_withdrawal_amount: number;
    network_confirmations: number;
    processing_time_seconds: number;
  }[];
}
