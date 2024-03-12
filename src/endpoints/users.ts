import { IUser, IUserUpdateSettlementRequest, IUserUpdateSettlementResponse } from "./models/users";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class UsersEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  public async getUserExchangeLimits(userId: string): Promise<IUser> {
    return await this.instance.request({
      path: Endpoints.getUserLimits.replace(":id", userId),
    }) as IUser;
  }

  public async updateUserSettlementPreference(userId: string, body: IUserUpdateSettlementRequest): Promise<IUserUpdateSettlementResponse> {
    return await this.instance.request({
      path: Endpoints.updateUserSettlementPreferences.replace(":id", userId),
      method: "POST",
      body: body,
    }) as IUserUpdateSettlementResponse;
  }
}
