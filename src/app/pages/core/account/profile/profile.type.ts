export interface IProfile {
  result: boolean;
  message: string;
  list: IUserInfo;
}

export interface IUserInfo {
  user_id: number;
  fist_name: string;
  last_name: string;
  email: string;
  mobile: number;
  address: {
    address_id: string | null;
    building_name: string | null;
    area_name: string | null;
    landmark: string | null;
    city: string | null;
    state: string | null;
    pincode: string | null;
  };
}
