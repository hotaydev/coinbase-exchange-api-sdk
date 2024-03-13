import { IProfile, IProfileCreateRequest, IProfileDelete, IProfileQueryParams, IProfileRename, IProfileTransfer } from "./models/profiles";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class ProfilesEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  /**
   * Get profiles ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getprofiles))
   * @returns Promise<IProfile[]>
   */
  public async getProfiles(query: IProfileQueryParams): Promise<IProfile[]> {
    return await this.instance.request({
      path: Endpoints.getProfiles,
      query: query,
    }) as IProfile[];
  }

  /**
   * Get profile by id ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getprofile))
   * @returns Promise<IProfile>
   */
  public async getProfileById(profileId: string, query: IProfileQueryParams): Promise<IProfile> {
    return await this.instance.request({
      path: Endpoints.getProfileById.replace(":id", profileId),
      query: query,
    }) as IProfile;
  }

  /**
   * Rename a profile ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_putprofile))
   * @returns Promise<IProfile>
   */
  public async renameProfile(profileId: string, body: IProfileRename): Promise<IProfile> {
    return await this.instance.request({
      path: Endpoints.updateProfileName.replace(":id", profileId),
      body: body,
      method: "PUT"
    }) as IProfile;
  }

  /**
   * Delete a profile ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_putprofiledeactivate))
   * @returns Promise<unknown>
   */
  public async deleteProfile(profileId: string, body: IProfileDelete): Promise<unknown> {
    return await this.instance.request({
      path: Endpoints.deleteProfile.replace(":id", profileId),
      body: body,
      method: "PUT"
    });
  }

  /**
   * Create a profile ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postprofile))
   * @returns Promise<IProfile>
   */
  public async createProfile(body: IProfileCreateRequest): Promise<IProfile> {
    return await this.instance.request({
      path: Endpoints.createProfile,
      body: body,
      method: "POST"
    }) as IProfile;
  }

  /**
   * Transfer funds between profiles ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postprofiletransfer))
   * @returns Promise<unknown>
   */
  public async transferFundsBetweenProfiles(body: IProfileTransfer): Promise<unknown> {
    return await this.instance.request({
      path: Endpoints.createTransferBetweenProfiles,
      body: body,
      method: "POST"
    });
  }
}
