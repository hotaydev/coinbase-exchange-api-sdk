import { IReport, IReportCreate, IReportCreated, IReportQueryParams } from "./models/reports";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class ReportsEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  public async getAllReports(query: IReportQueryParams): Promise<IReport[]> {
    return await this.instance.request({
      path: Endpoints.getProfiles,
      query: query,
    }) as IReport[];
  }

  public async getSingleReports(reportId: string): Promise<IReport> {
    return await this.instance.request({
      path: Endpoints.getProfileById.replace(":id", reportId),
    }) as IReport;
  }

  public async createReport(body: IReportCreate): Promise<IReportCreated> {
    return await this.instance.request({
      path: Endpoints.createReport,
      method: "POST",
      body: body,
    }) as IReportCreated;
  }
}
