/* eslint-disable @typescript-eslint/no-duplicate-enum-values */

/**
 * Enum with all Coinbase Endpoints.
 * 
 * - Last reviwed on: March 11, 2024
 */
export enum Endpoints {
  getAccounts = "/accounts",
  getAccountById = "/accounts/:id",
  getAccountHolds = "/accounts/:id/holds",
  getAccountLedgers = "/accounts/:id/ledger",
  getAccountTransfers = "/accounts/:id/transfers",

  getAddressBook = "/address-book",
  createAddressBook = "/address-book",
  deleteAddressBook = "/address-book/:id",

  getCoinbaseWallets = "/coinbase-accounts",
  createCoinbaseWalletAddress = "/coinbase-accounts/:id/addresses",

  createConversionsOfCurrency = "/conversions",
  getConversionFees = "/conversions/fees",
  getConversionById = "/conversions/:id",

  getCurrencies = "/currencies",
  getCurrencyById = "/currencies/:id",

  createDepositFromCoinbaseAccount = "/deposits/coinbase-account",
  createDepositFromPaymentMethod = "/deposits/payment-method",
  getPaymentMethods = "/payment-methods",
  getTransfers = "/transfers",
  getTransferById = "/transfers/:id",
  createTransferTravelInformation = "/transfers/:id/travel-rules",
  createWithdrawToCoinbaseAccount = "/withdrawals/coinbase-account",
  createWithdrawToPaymentMethod = "/withdrawals/payment-method",
  createWithdrawToCryptoAddress = "/withdrawals/crypto",
  getWithdrawFee = "/withdrawals/fee-estimate",

  getFees = "/fees",
  getFills = "/fills",
  getOrders = "/orders",
  cancelOrders = "/orders",
  createOrders = "/orders",
  getOrderById = "/orders/:id",
  cancelOrderById = "/orders/:id",

  getLoans = "/loans",
  getLoansAssets = "/loans/assets",
  getLoansLendingOverview = "/loans/lending-overview",
  getLoanPreview = "/loans/loan-preview",
  createLoan = "/loans/open",
  getLoansOptions = "/loans/options",
  createLoanRepay = "/loans/repay-principal",
  getLoanRepayPreview = "/loans/repayment-preview",

  getOraclePrices = "/oracle",

  getTradingPairs = "/products",
  getTradingPair = "/products/:id",
  getProductBook = "/products/:id/book",
  getProductCandles = "/products/:id/candles",
  getProductStats = "/products/:id/stats",
  getProductTicker = "/products/:id/ticker",
  getProductTrades = "/products/:id/trades",

  getProfiles = "/profiles",
  createProfile = "/profiles",
  createTransferBetweenProfiles = "/profiles/transfer",
  getProfileById = "/profiles/:id",
  updateProfileName = "/profiles/:id",
  deleteProfile = "/profiles/:id/deactivate",

  getReports = "/reports",
  createReport = "/reports",
  getReportById = "/reports/:id",

  getTravelRules = "/travel-rules",
  createTravelRule = "/travel-rules",
  deleteTravelRule = "/travel-rules/:id",

  getUserLimits = "/users/:id/exchange-limits",
  updateUserSettlementPreferences = "/users/:id/settlement-preferences",

  getWrappedAssets = "/wrapped-assets",
  getWrappedStakeWraps = "/wrapped-assets/stake-wrap",
  createWrappedStakeWrap = "/wrapped-assets/stake-wrap",
  getWrappedStakeWrap = "/wrapped-assets/stake-wrap/:id",
  getWrappedAssetById = "/wrapped-assets/:id",
  getWrappedAssetConversionRate = "/wrapped-assets/:id/conversion-rate",
}

