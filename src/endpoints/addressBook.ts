import { IAddAddressBookRequest, IAddAddressBookResponse, IAddressBook } from "./models/addressBook";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class AddressBookEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  /**
   * Get address book ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaddressbook))
   * @returns Promise<IAddressBook[]>
   */
  public async getAllAddressBooks(): Promise<IAddressBook[]> {
    return await this.instance.request({
      path: Endpoints.getAddressBook,
    }) as IAddressBook[];
  }

  /**
   * Add addresses ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postaddressbook))
   * @returns Promise<IAddAddressBookResponse[]>
   */
  public async createAddressBook(body: IAddAddressBookRequest): Promise<IAddAddressBookResponse[]> {
    return await this.instance.request({
      path: Endpoints.createAddressBook,
      method: "POST",
      body: body,
    }) as IAddAddressBookResponse[];
  }

  /**
   * Delete address ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_deleteaddressbookentry))
   * @returns Promise<object>
   */
  public async deleteAddressBook(addressBookId: string): Promise<object> {
    return await this.instance.request({
      path: Endpoints.deleteAddressBook.replace(":id", addressBookId),
      method: "DELETE",
    }) as object;
  }
}
