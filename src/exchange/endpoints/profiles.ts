import { IProfile, IProfileCreateRequest, IProfileDelete, IProfileQueryParams, IProfileRename, IProfileTransfer } from "./models/profiles";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class ProfilesEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  public async getProfiles(query: IProfileQueryParams): Promise<IProfile[]> {
    return await this.instance.request({
      path: Endpoints.getProfiles,
      query: query,
    }) as IProfile[];
  }

  public async getProfileById(profileId: string, query: IProfileQueryParams): Promise<IProfile> {
    return await this.instance.request({
      path: Endpoints.getProfileById.replace(":id", profileId),
      query: query,
    }) as IProfile;
  }

  public async renameProfile(profileId: string, body: IProfileRename): Promise<IProfile> {
    return await this.instance.request({
      path: Endpoints.updateProfileName.replace(":id", profileId),
      body: body,
      method: "PUT"
    }) as IProfile;
  }

  public async deleteProfile(profileId: string, body: IProfileDelete): Promise<unknown> {
    return await this.instance.request({
      path: Endpoints.deleteProfile.replace(":id", profileId),
      body: body,
      method: "PUT"
    });
  }

  public async createProfile(body: IProfileCreateRequest): Promise<IProfile> {
    return await this.instance.request({
      path: Endpoints.createProfile,
      body: body,
      method: "POST"
    }) as IProfile;
  }

  public async transferFundsBetweenProfiles(body: IProfileTransfer): Promise<unknown> {
    return await this.instance.request({
      path: Endpoints.createTransferBetweenProfiles,
      body: body,
      method: "POST"
    });
  }
}
