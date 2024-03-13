import {
  IWrappedAsset,
  IWrappedAssetConversionRate,
  IWrappedAssetStakeWrap,
  IWrappedAssetStakeWrapQueryParams,
  IWrappedAssetStakeWrapRequest,
  IWrappedAssets,
} from "./models/wrappedAssets";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class WrappedAssetsEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  /**
   * Get all wrapped assets ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getwrappedassets))
   * @returns Promise<IWrappedAssets>
   */
  public async getAllWrappedAssets(): Promise<IWrappedAssets> {
    return (await this.instance.request({
      path: Endpoints.getWrappedAssets,
    })) as IWrappedAssets;
  }

  /**
   * Get all stake-wraps ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getallwrappedassetstakewraps))
   * @returns Promise<IWrappedAssetStakeWrap[]>
   */
  public async getAllStakeWraps(
    query: IWrappedAssetStakeWrapQueryParams,
  ): Promise<IWrappedAssetStakeWrap[]> {
    return (await this.instance.request({
      path: Endpoints.getWrappedStakeWraps,
      query: query,
    })) as IWrappedAssetStakeWrap[];
  }

  /**
   * Get a single stake-wrap ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getwrappedassetstakewrap))
   * @returns Promise<IWrappedAssetStakeWrap>
   */
  public async getSingleStakeWrap(
    stakeWrapId: string,
  ): Promise<IWrappedAssetStakeWrap> {
    return (await this.instance.request({
      path: Endpoints.getWrappedStakeWrap.replace(":id", stakeWrapId),
    })) as IWrappedAssetStakeWrap;
  }

  /**
   * Get wrapped asset details ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getwrappedasset))
   * @returns Promise<IWrappedAsset>
   */
  public async getSingleWrappedAsset(
    wrappedAssetId: string,
  ): Promise<IWrappedAsset> {
    return (await this.instance.request({
      path: Endpoints.getWrappedAssetById.replace(":id", wrappedAssetId),
    })) as IWrappedAsset;
  }

  /**
   * Get wrapped asset conversion rate ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getwrappedassetconversionrate))
   * @returns Promise<IWrappedAssetConversionRate>
   */
  public async getWrappedAssetConversionRate(
    wrappedAssetId: string,
  ): Promise<IWrappedAssetConversionRate> {
    return (await this.instance.request({
      path: Endpoints.getWrappedAssetConversionRate.replace(
        ":id",
        wrappedAssetId,
      ),
    })) as IWrappedAssetConversionRate;
  }

  /**
   * Create a new stake-wrap ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postwrappedassetstakewrap))
   * @returns Promise<IWrappedAssetStakeWrap>
   */
  public async createNewStakeWrap(
    body: IWrappedAssetStakeWrapRequest,
  ): Promise<IWrappedAssetStakeWrap> {
    return (await this.instance.request({
      path: Endpoints.createWrappedStakeWrap,
      body: body,
      method: "POST",
    })) as IWrappedAssetStakeWrap;
  }
}
