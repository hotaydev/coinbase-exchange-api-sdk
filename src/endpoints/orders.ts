import {
  ICancelAllOrdersQueryParams,
  ICancelSingleOrderQueryParams,
  ICreateNewOrderRequest,
  ICreateNewOrderResponse,
  IFill,
  IGetAllFillsQueryParams,
  IGetAllOrdersQueryParams,
  IOrder,
} from "./models/orders";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class OrdersEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  /**
   * Get all fills ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getfills))
   * @returns Promise<IFill[]>
   */
  public async getAllFills(query?: IGetAllFillsQueryParams): Promise<IFill[]> {
    return (await this.instance.request({
      path: Endpoints.getFills,
      query: query,
    })) as IFill[];
  }

  /**
   * Get all orders ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getorders))
   * @returns Promise<IOrder[]>
   */
  public async getAllOrders(
    query?: IGetAllOrdersQueryParams,
  ): Promise<IOrder[]> {
    return (await this.instance.request({
      path: Endpoints.getOrders,
      query: query,
    })) as IOrder[];
  }

  /**
   * Cancel all orders ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_deleteorders))
   * @returns Promise<string[]>
   */
  public async cancelAllOrders(
    query?: ICancelAllOrdersQueryParams,
  ): Promise<string[]> {
    return (await this.instance.request({
      path: Endpoints.cancelOrders,
      method: "DELETE",
      query: query,
    })) as string[];
  }

  /**
   * Cancel an order ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_deleteorder))
   * @returns Promise<string>
   */
  public async cancelSingleOrder(
    orderId: string,
    query?: ICancelAllOrdersQueryParams,
  ): Promise<string> {
    return (await this.instance.request({
      path: Endpoints.cancelOrderById.replace(":id", orderId),
      method: "DELETE",
      query: query,
    })) as string;
  }

  /**
   * Create a new order ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postorders))
   * @returns Promise<ICreateNewOrderResponse>
   */
  public async createNewOrder(
    body: ICreateNewOrderRequest,
  ): Promise<ICreateNewOrderResponse> {
    return (await this.instance.request({
      path: Endpoints.getOrders,
      method: "POST",
      body: body,
    })) as ICreateNewOrderResponse;
  }

  /**
   * Get single order ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getorder))
   * @returns Promise<IOrder>
   */
  public async getSingleOrder(
    orderId: string,
    query?: ICancelSingleOrderQueryParams,
  ): Promise<IOrder> {
    return (await this.instance.request({
      path: Endpoints.getOrderById.replace(":id", orderId),
      query: query,
    })) as IOrder;
  }
}
