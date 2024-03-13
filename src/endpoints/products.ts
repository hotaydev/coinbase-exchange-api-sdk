import { IProductBook, IProductBookQueryParams, IProductCandles, IProductCandlesQueryParams, IProductStats, IProductTicker, IProductTrades, IProductVolume, ISingleProduct, ISingleProductQueryParams } from "./models/products";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";
import { IPagination } from "./models/_general";

export default class ProductsEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  /**
   * Get all known trading pairs ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproducts))
   * @returns Promise<ISingleProduct[]>
   */
  public async getAllKnownTradingPairs(query: ISingleProductQueryParams): Promise<ISingleProduct[]> {
    return await this.instance.request({
      path: Endpoints.getTradingPairs,
      query: query,
    }) as ISingleProduct[];
  }

  /**
   * Get all product volume ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproductsvolume))
   * @returns Promise<IProductVolume[]>
   */
  public async getAllProductVolume(): Promise<IProductVolume[]> {
    return await this.instance.request({
      path: Endpoints.getTradingProductVolume,
    }) as IProductVolume[];
  }
  
  /**
   * Get single product ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproduct))
   * @returns Promise<ISingleProduct>
   */
  public async getSingleProduct(productId: string): Promise<ISingleProduct> {
    return await this.instance.request({
      path: Endpoints.getTradingPair.replace(":id", productId),
    }) as ISingleProduct;
  }

  /**
   * Get product book ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproductbook))
   * @returns Promise<IProductBook>
   */
  public async getProductBook(productId: string, query: IProductBookQueryParams): Promise<IProductBook> {
    return await this.instance.request({
      path: Endpoints.getProductBook.replace(":id", productId),
      query: query,
    }) as IProductBook;
  }

  /**
   * Get product candles ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproductcandles))
   * @returns Promise<IProductCandles[]>
   */
  public async getProductCandles(productId: string, query: IProductCandlesQueryParams): Promise<IProductCandles[]> {
    return await this.instance.request({
      path: Endpoints.getProductCandles.replace(":id", productId),
      query: query,
    }) as IProductCandles[];
  }

  /**
   * Get product stats ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproductstats))
   * @returns Promise<IProductStats>
   */
  public async getProductStats(productId: string): Promise<IProductStats> {
    return await this.instance.request({
      path: Endpoints.getProductStats.replace(":id", productId),
    }) as IProductStats;
  }

  /**
   * Get product ticker ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproductticker))
   * @returns Promise<IProductTicker>
   */
  public async getProductTicker(productId: string): Promise<IProductTicker> {
    return await this.instance.request({
      path: Endpoints.getProductTicker.replace(":id", productId),
    }) as IProductTicker;
  }

  /**
   * Get product trades ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproducttrades))
   * @returns Promise<IProductTrades[]>
   */
  public async getProductTrades(productId: string, query: IPagination): Promise<IProductTrades[]> {
    return await this.instance.request({
      path: Endpoints.getProductTrades.replace(":id", productId),
      query: query,
    }) as IProductTrades[];
  }
}
