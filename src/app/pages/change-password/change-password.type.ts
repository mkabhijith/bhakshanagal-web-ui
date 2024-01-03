export interface IChangePasswordPaylod {
  email: string;
  password: string;
}

export interface IChangePasswordResponce {
  result: boolean;
  message: string;
}
