import {
  AccountEndpoint,
  AddressBookEndpoint,
  CoinbaseAccountsEndpoint,
  CoinbasePriceOracleEndpoint,
  ConversionsEndpoint,
  CurrenciesEndpoint,
  FeesEndpoint,
  LoansEndpoint,
  OrdersEndpoint,
  ProductsEndpoint,
  ProfilesEndpoint,
  ReportsEndpoint,
  TransfersEndpoint,
  TravelRulesEndpoint,
  UsersEndpoint,
  WrappedAssetsEndpoint,
} from "./endpoints";
import CoinbaseTradeRequest from "./request";

/// Use it like `const cb = new CoinbaseSDK({ key: "", secret: "", ... })`
export default class CoinbaseSDK {
  private instance = new CoinbaseTradeRequest();

  constructor({
    key,
    passphrase,
    secret,
    environment = "env",
  }: {
    key: string;
    passphrase: string;
    secret: string;
    environment?: "env" | "prod";
  }) {
    this.instance.initialize({ key, passphrase, secret, environment });
  }

  get account(): AccountEndpoint {
    return new AccountEndpoint(this.instance);
  }

  get addressBook(): AddressBookEndpoint {
    return new AddressBookEndpoint(this.instance);
  }

  get coinbaseAccounts(): CoinbaseAccountsEndpoint {
    return new CoinbaseAccountsEndpoint(this.instance);
  }

  get conversions(): ConversionsEndpoint {
    return new ConversionsEndpoint(this.instance);
  }

  get currencies(): CurrenciesEndpoint {
    return new CurrenciesEndpoint(this.instance);
  }

  get transfers(): TransfersEndpoint {
    return new TransfersEndpoint(this.instance);
  }

  get fees(): FeesEndpoint {
    return new FeesEndpoint(this.instance);
  }

  get orders(): OrdersEndpoint {
    return new OrdersEndpoint(this.instance);
  }

  get loans(): LoansEndpoint {
    return new LoansEndpoint(this.instance);
  }

  get coinbasePriceOracle(): CoinbasePriceOracleEndpoint {
    return new CoinbasePriceOracleEndpoint(this.instance);
  }

  get products(): ProductsEndpoint {
    return new ProductsEndpoint(this.instance);
  }

  get profiles(): ProfilesEndpoint {
    return new ProfilesEndpoint(this.instance);
  }

  get reports(): ReportsEndpoint {
    return new ReportsEndpoint(this.instance);
  }

  get travelRules(): TravelRulesEndpoint {
    return new TravelRulesEndpoint(this.instance);
  }

  get users(): UsersEndpoint {
    return new UsersEndpoint(this.instance);
  }

  get wrappedAssets(): WrappedAssetsEndpoint {
    return new WrappedAssetsEndpoint(this.instance);
  }
}
