import {
  ITravelRule,
  ITravelRuleCreate,
  ITravelRulesQueryParams,
} from "./models/travelRules";
import CoinbaseExchangeApiRequest from "../request";
import { Endpoints } from "./_allEndpoints";

export default class TravelRulesEndpoint {
  private instance: CoinbaseExchangeApiRequest;

  constructor(instance: CoinbaseExchangeApiRequest) {
    this.instance = instance;
  }

  /**
   * Get all travel rule information ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_gettravelrules))
   * @returns Promise<ITravelRule[]>
   */
  public async getAllTravelRules(
    query: ITravelRulesQueryParams,
  ): Promise<ITravelRule[]> {
    return (await this.instance.request({
      path: Endpoints.getTravelRules,
      query: query,
    })) as ITravelRule[];
  }

  /**
   * Create travel rule entry ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_posttravelrule))
   * @returns Promise<ITravelRule>
   */
  public async createTravelRule(body: ITravelRuleCreate): Promise<ITravelRule> {
    return (await this.instance.request({
      path: Endpoints.createTravelRule,
      method: "POST",
      body: body,
    })) as ITravelRule;
  }

  /**
   * Delete existing travel rule entry ([Docs Reference](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_deletetravelrule))
   * @returns Promise<unknown>
   */
  public async deleteTravelRule(travelRuleId: string): Promise<unknown> {
    return await this.instance.request({
      path: Endpoints.deleteTravelRule.replace(":id", travelRuleId),
      method: "DELETE",
    });
  }
}
