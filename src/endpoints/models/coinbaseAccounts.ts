export interface CoinbaseWallets {
  id: string;
  name: string;
  balance: string;
  currency: string;
  type: "wallet" | "fiat";
  primary: boolean;
  active: boolean;
  hold_balance: string;
  hold_currency: string;
  destination_tag_name?: string;
  destination_tag_regex?: string;
  available_on_consumer?: boolean;
}

export interface GenerateCryptoAddressRequest {
  account_id: string;
  profile_id: string;
  network: string;
}

export interface GenerateCryptoAddressResponse {
  id: string;
  address: string;
  address_info: {
    address: string;
    destination_tag: string;
  };
  name: string;
  created_at: string;
  updated_at: string;
  network: string;
  uri_scheme: string;
  resource: string;
  resource_path: string;
  warnings: {
    title: string;
    details: string;
    image_url: string;
  }[];
  legacy_address?: string;
  destination_tag?: string;
  deposit_uri?: string;
  callback_url?: string;
}
