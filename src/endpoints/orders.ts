import { ICancelAllOrdersQueryParams, ICancelSingleOrderQueryParams, ICreateNewOrderRequest, ICreateNewOrderResponse, IFill, IGetAllFillsQueryParams, IGetAllOrdersQueryParams, IOrder } from "./models/orders";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class OrdersEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  public async getAllFills(query?: IGetAllFillsQueryParams): Promise<IFill[]> {
    return await this.instance.request({
      path: Endpoints.getFills,
      query: query,
    }) as IFill[];
  }

  public async getAllOrders(query?: IGetAllOrdersQueryParams): Promise<IOrder[]> {
    return await this.instance.request({
      path: Endpoints.getOrders,
      query: query,
    }) as IOrder[];
  }

  public async cancelAllOrders(query?: ICancelAllOrdersQueryParams): Promise<string[]> {
    return await this.instance.request({
      path: Endpoints.cancelOrders,
      method: "DELETE",
      query: query,
    }) as string[];
  }

  public async cancelSingleOrder(orderId: string, query?: ICancelAllOrdersQueryParams): Promise<string> {
    return await this.instance.request({
      path: Endpoints.cancelOrderById.replace(":id", orderId),
      method: "DELETE",
      query: query,
    }) as string;
  }

  public async createNewOrder(body: ICreateNewOrderRequest): Promise<ICreateNewOrderResponse> {
    return await this.instance.request({
      path: Endpoints.getOrders,
      method: "POST",
      body: body,
    }) as ICreateNewOrderResponse;
  }

  public async getSingleOrder(orderId: string, query?: ICancelSingleOrderQueryParams): Promise<IOrder> {
    return await this.instance.request({
      path: Endpoints.getOrderById.replace(":id", orderId),
      query: query,
    }) as IOrder;
  }
}
