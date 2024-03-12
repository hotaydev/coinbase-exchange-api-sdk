import { IWrappedAsset, IWrappedAssetConversionRate, IWrappedAssetStakeWrap, IWrappedAssetStakeWrapQueryParams, IWrappedAssetStakeWrapRequest, IWrappedAssets } from "./models/wrappedAssets";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class WrappedAssetsEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  public async getAllWrappedAssets(): Promise<IWrappedAssets> {
    return await this.instance.request({
      path: Endpoints.getWrappedAssets,
    }) as IWrappedAssets;
  }

  public async getAllStakeWraps(query: IWrappedAssetStakeWrapQueryParams): Promise<IWrappedAssetStakeWrap[]> {
    return await this.instance.request({
      path: Endpoints.getWrappedStakeWraps,
      query: query,
    }) as IWrappedAssetStakeWrap[];
  }

  public async getSingleStakeWrap(stakeWrapId: string): Promise<IWrappedAssetStakeWrap> {
    return await this.instance.request({
      path: Endpoints.getWrappedStakeWrap.replace(":id", stakeWrapId),
    }) as IWrappedAssetStakeWrap;
  }

  public async getSingleWrappedAsset(wrappedAssetId: string): Promise<IWrappedAsset> {
    return await this.instance.request({
      path: Endpoints.getWrappedAssetById.replace(":id", wrappedAssetId),
    }) as IWrappedAsset;
  }

  public async getWrappedAssetConversionRate(wrappedAssetId: string): Promise<IWrappedAssetConversionRate> {
    return await this.instance.request({
      path: Endpoints.getWrappedAssetConversionRate.replace(":id", wrappedAssetId),
    }) as IWrappedAssetConversionRate;
  }

  public async createNewStakeWrap(body: IWrappedAssetStakeWrapRequest): Promise<IWrappedAssetStakeWrap> {
    return await this.instance.request({
      path: Endpoints.createWrappedStakeWrap,
      body: body,
      method: "POST",
    }) as IWrappedAssetStakeWrap;
  }
}
