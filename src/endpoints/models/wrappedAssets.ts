import { IPagination } from "./_general";

export interface IWrappedAsset {
  id: string;
  circulating_supply: string;
  total_supply: string;
  conversion_rate: string;
  apy: string;
}

export interface IWrappedAssets {
  wrapped_assets: IWrappedAsset[];
}

export interface IWrappedAssetStakeWrap {
  id: string;
  from_amount: string;
  to_amount: string;
  from_account_id: string;
  to_account_id: string;
  from_currency: string;
  to_currency: string;
  status: string;
  conversion_rate: string;
  created_at: string;
  completed_at: string;
  canceled_at: string;
}

export interface IWrappedAssetStakeWrapQueryParams extends IPagination {
  from: string;
  to: string;
  status: string;
}

export interface IWrappedAssetStakeWrapRequest {
  from_currency: string;
  to_currency: string;
  amount: string;
}

export interface IWrappedAssetConversionRate {
  amount: string;
}
