import {
  IConversionRate,
  IConvertCurrencyRequest,
  IConvertCurrencyResponse,
  IGetConversion,
  IGetConversionQueryParams,
} from "./models/conversions";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class ConversionsEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  /**
   * Convert currency ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postconversion))
   * @returns Promise<IConvertCurrencyResponse>
   */
  public async convertCurrency(
    body: IConvertCurrencyRequest,
  ): Promise<IConvertCurrencyResponse> {
    return (await this.instance.request({
      path: Endpoints.createConversionsOfCurrency,
      method: "POST",
      body: body,
    })) as IConvertCurrencyResponse;
  }

  /**
   * Get conversion fee rates ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getconversionfees))
   * @returns Promise<IConversionRate>
   */
  public async getConversionFeeRates(): Promise<IConversionRate> {
    return (await this.instance.request({
      path: Endpoints.getConversionFees,
    })) as IConversionRate;
  }

  /**
   * Get a conversion ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getconversion))
   * @returns Promise<IGetConversion>
   */
  public async getSingleConversion(
    conversion_id: string,
    query: IGetConversionQueryParams,
  ): Promise<IGetConversion> {
    return (await this.instance.request({
      path: Endpoints.getConversionFees.replace(":id", conversion_id),
      query: query,
    })) as IGetConversion;
  }
}
