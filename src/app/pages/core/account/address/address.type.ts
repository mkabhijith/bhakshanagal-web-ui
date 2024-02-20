export interface IAddressListResponce {
  result: boolean;
  message: string;
  list: IAddress[];
}

export interface IAddress {
  address_id: number;
  address_fullname: string;
  address_phone_number: number;
  address_pincode: number;
  address_state: string;
  address_city: string;
  address_building_name: string;
  address_area_name: string;
  address_landmark: string;
  address_status: string;
  address_user_id: number;
  address_alt_phone_number: number;
}

export interface IAddAddressResponce {
  result: boolean;
  message: string;
}
