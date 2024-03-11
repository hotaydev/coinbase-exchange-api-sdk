enum IVaspId {
  null,
  "Coinbase",
  "Anchorage",
  "Balance",
  "bitFlyer",
  "BitGo",
  "Bittrex",
  "BlockFi",
  "Circle",
  "Coinhako",
  "Fidelity",
  "Gemini",
  "Huobi",
  "Kraken",
  "Paxos",
  "PayPal",
  "Robinhood",
  "Shakepay",
  "Standard Custody",
  "Tradestation",
  "Zero Hash",
  "Bitstamp",
}

export interface IAddressBook {
  id: string;
  address: string;
  destination_tag?: string;
  currency: string;
  label: string;
  address_book_added_at: string;
  last_used?: string;
  is_verified_self_hosted_wallet?: boolean;
  vasp_id?: IVaspId;
}

export interface IAddAddressBookRequest {
  addresses: {
    currency: string;
    to: {
      address: string;
      destination_tag?: string;
    };
    label: string;
    is_verified_self_hosted_wallet?: boolean;
    vasp_id?: IVaspId;
  }[];
}

export interface IAddAddressBookResponse {
  id: string;
  address: string;
  address_info: {
    address: string;
    display_address: string;
    destination_tag: string;
  };
  currency: string;
  label: string;
  display_address: string;
  trusted: boolean;
  address_booked: boolean;
  address_book_added_at: string;
  last_used: string;
  address_book_entry_pending_until: string;
  is_verified_self_hosted_wallet: boolean;
  vasp_id: IVaspId;
}
