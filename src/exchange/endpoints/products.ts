import { IProductBook, IProductBookQueryParams, IProductCandles, IProductCandlesQueryParams, IProductStats, IProductTicker, IProductTrades, ISingleProduct, ISingleProductQueryParams } from "./models/products";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";
import { IPagination } from "./models/_general";

export default class ProductsEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  public async getAllKnownTradingPairs(query: ISingleProductQueryParams): Promise<ISingleProduct[]> {
    return await this.instance.request({
      path: Endpoints.getTradingPairs,
      query: query,
    }) as ISingleProduct[];
  }

  public async getSingleProduct(productId: string): Promise<ISingleProduct> {
    return await this.instance.request({
      path: Endpoints.getTradingPair.replace(":id", productId),
    }) as ISingleProduct;
  }

  public async getProductBook(productId: string, query: IProductBookQueryParams): Promise<IProductBook> {
    return await this.instance.request({
      path: Endpoints.getProductBook.replace(":id", productId),
      query: query,
    }) as IProductBook;
  }

  public async getProductCandles(productId: string, query: IProductCandlesQueryParams): Promise<IProductCandles[]> {
    return await this.instance.request({
      path: Endpoints.getProductCandles.replace(":id", productId),
      query: query,
    }) as IProductCandles[];
  }

  public async getProductStats(productId: string): Promise<IProductStats> {
    return await this.instance.request({
      path: Endpoints.getProductStats.replace(":id", productId),
    }) as IProductStats;
  }

  public async getProductTicker(productId: string): Promise<IProductTicker> {
    return await this.instance.request({
      path: Endpoints.getProductTicker.replace(":id", productId),
    }) as IProductTicker;
  }

  public async getProductTrades(productId: string, query: IPagination): Promise<IProductTrades[]> {
    return await this.instance.request({
      path: Endpoints.getProductTrades.replace(":id", productId),
      query: query,
    }) as IProductTrades[];
  }
}
