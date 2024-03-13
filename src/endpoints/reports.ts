import {
  IReport,
  IReportCreate,
  IReportCreated,
  IReportQueryParams,
} from "./models/reports";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class ReportsEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  /**
   * Get all reports ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getreports))
   * @returns Promise<IReport[]>
   */
  public async getAllReports(query: IReportQueryParams): Promise<IReport[]> {
    return (await this.instance.request({
      path: Endpoints.getProfiles,
      query: query,
    })) as IReport[];
  }

  /**
   * Get a report ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getreport))
   * @returns Promise<IReport>
   */
  public async getSingleReport(reportId: string): Promise<IReport> {
    return (await this.instance.request({
      path: Endpoints.getProfileById.replace(":id", reportId),
    })) as IReport;
  }

  /**
   * Create a report ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postreports))
   * @returns Promise<IReportCreated>
   */
  public async createReport(body: IReportCreate): Promise<IReportCreated> {
    return (await this.instance.request({
      path: Endpoints.createReport,
      method: "POST",
      body: body,
    })) as IReportCreated;
  }
}
