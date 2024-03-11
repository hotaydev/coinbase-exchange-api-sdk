export interface ITravelRule {
  id: string;
  created_at: string;
  address: string;
  originator_name: string;
  originator_country: string;
}

export interface ITravelRuleCreate {
  address: string;
  originator_name: string;
  originator_country: string;
}