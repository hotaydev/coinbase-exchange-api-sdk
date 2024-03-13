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
import CoinbaseExchangeApiRequest from "./request";

/**
 * Use it like `const cb = new CoinbaseExchangeApi({ key: "", secret: "", ... })`
 * 
 * For more information, see https://docs.cloud.coinbase.com/exchange/
 */
export class CoinbaseExchangeApi {
  private instance = new CoinbaseExchangeApiRequest();

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

  /**
   * Accounts Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaccounts)
   * 
   * Available methods:
   * - getAllAccounts
   * - getSingleAccount
   * - getAccountHolds
   * - getAccountLedgers
   * - getAccountTransfers
   */
  get account(): AccountEndpoint {
    return new AccountEndpoint(this.instance);
  }

  /**
   * Address Book Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaddressbook)
   * 
   * Available methods:
   * - getAllAddressBooks
   * - createAddressBook
   * - deleteAddressBook
   */
  get addressBook(): AddressBookEndpoint {
    return new AddressBookEndpoint(this.instance);
  }

  /**
   * Coinbase Accounts Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getcoinbaseaccounts)
   * 
   * Available methods:
   * - getAllCoinbaseWallets
   * - createCryptoAddress
   */
  get coinbaseAccounts(): CoinbaseAccountsEndpoint {
    return new CoinbaseAccountsEndpoint(this.instance);
  }

  /**
   * Conversions Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postconversion)
   * 
   * Available methods:
   * - convertCurrency
   * - getConversionFeeRates
   * - getSingleConversion
   */
  get conversions(): ConversionsEndpoint {
    return new ConversionsEndpoint(this.instance);
  }

  /**
   * Currencies Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getcurrencies)
   * 
   * Available methods:
   * - getAllKnownCurrencies
   * - getSingleCurrency
   */
  get currencies(): CurrenciesEndpoint {
    return new CurrenciesEndpoint(this.instance);
  }

  /**
   * Transfers Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postdepositcoinbaseaccount)
   * 
   * Available methods:
   * - getAllPaymentMethods
   * - getAllTransfers
   * - getSingleTransfer
   * - getFeeEstimateForCryptoWithdrawal
   * - depositFromCoinbaseAccount
   * - depositFromPaymentMethod
   * - submitTravelInformationForTransfer
   * - withdrawToCryptoAddress
   * - withdrawToPaymentMethod
   */
  get transfers(): TransfersEndpoint {
    return new TransfersEndpoint(this.instance);
  }

  /**
   * Fees Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getfees)
   * 
   * Available methods:
   * - getFees
   */
  get fees(): FeesEndpoint {
    return new FeesEndpoint(this.instance);
  }

  /**
   * Orders Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getfills)
   * 
   * Available methods:
   * - getAllFills
   * - getAllOrders
   * - cancelAllOrders
   * - cancelSingleOrder
   * - createNewOrder
   * - getSingleOrder
   */
  get orders(): OrdersEndpoint {
    return new OrdersEndpoint(this.instance);
  }

  /**
   * Loans Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getloans)
   * 
   * Available methods:
   * - getAllLoans
   * - getAllLoanAssets
   * - getLendingOverview
   * - getNewLoanPreview
   * - openNewLoan
   * - getNewLoanOptions
   * - repayLoanPrincipal
   * - getLoanRepaymentPreview
   */
  get loans(): LoansEndpoint {
    return new LoansEndpoint(this.instance);
  }

  /**
   * Coinbase Price Oracle Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getcoinbasepriceoracle)
   * 
   * Available methods:
   * - getSignedPrices
   */
  get coinbasePriceOracle(): CoinbasePriceOracleEndpoint {
    return new CoinbasePriceOracleEndpoint(this.instance);
  }

  /**
   * Products Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproducts)
   * 
   * Available methods:
   * - getAllKnownTradingPairs
   * - getSingleProduct
   * - getProductBook
   * - getProductCandles
   * - getProductStats
   * - getProductTicker
   * - getProductTrades
   */
  get products(): ProductsEndpoint {
    return new ProductsEndpoint(this.instance);
  }

  /**
   * Profiles Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getprofiles)
   * 
   * Available methods:
   * - getProfiles
   * - getProfileById
   * - renameProfile
   * - deleteProfile
   * - createProfile
   * - transferFundsBetweenProfiles
   */
  get profiles(): ProfilesEndpoint {
    return new ProfilesEndpoint(this.instance);
  }

  /**
   * Reports Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getreports)
   * 
   * Available methods:
   * - getAllReports
   * - getSingleReport
   * - createReport
   */
  get reports(): ReportsEndpoint {
    return new ReportsEndpoint(this.instance);
  }

  /**
   * Travel Rules Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_gettravelrules)
   * 
   * Available methods:
   * - getAllTravelRules
   * - createTravelRule
   * - deleteTravelRule
   */
  get travelRules(): TravelRulesEndpoint {
    return new TravelRulesEndpoint(this.instance);
  }

  /**
   * Users Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getuserexchangelimits)
   * 
   * Available methods:
   * - getUserExchangeLimits
   * - updateUserSettlementPreference
   */
  get users(): UsersEndpoint {
    return new UsersEndpoint(this.instance);
  }

  /**
   * Wrapped Assets Section of [Coinbase Documentation](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getwrappedassets)
   * 
   * Available methods:
   * - getAllWrappedAssets
   * - getAllStakeWraps
   * - getSingleStakeWrap
   * - getSingleWrappedAsset
   * - getWrappedAssetConversionRate
   * - createNewStakeWrap
   */
  get wrappedAssets(): WrappedAssetsEndpoint {
    return new WrappedAssetsEndpoint(this.instance);
  }
}