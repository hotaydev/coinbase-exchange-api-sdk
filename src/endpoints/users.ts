import {
  IUser,
  IUserUpdateSettlementRequest,
  IUserUpdateSettlementResponse,
} from "./models/users";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class UsersEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  /**
   * Get user exchange limits ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getuserexchangelimits))
   * @returns Promise<IUser>
   */
  public async getUserExchangeLimits(userId: string): Promise<IUser> {
    return (await this.instance.request({
      path: Endpoints.getUserLimits.replace(":id", userId),
    })) as IUser;
  }

  /**
   * Update settlement preference ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postuserlevelsettlementpreferences))
   * @returns Promise<IUserUpdateSettlementResponse>
   */
  public async updateUserSettlementPreference(
    userId: string,
    body: IUserUpdateSettlementRequest,
  ): Promise<IUserUpdateSettlementResponse> {
    return (await this.instance.request({
      path: Endpoints.updateUserSettlementPreferences.replace(":id", userId),
      method: "POST",
      body: body,
    })) as IUserUpdateSettlementResponse;
  }
}
