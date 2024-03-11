export interface IProfile {
  id: string;
  user_id: string;
  name: string;
  active: boolean;
  is_default: boolean;
  created_at: string;
}

export interface IProfileCreateRequest {
  name: string;
}

export interface IProfileCreateResponse extends IProfile {}

export interface IProfileTransfer {
  from: string;
  to: string;
  currency: string;
  amount: string;
}

export interface IProfileRename {
  profile_id: string;
  name: string;
}

export interface IProfileDelete {
  profile_id: string;
  to: string;
}
