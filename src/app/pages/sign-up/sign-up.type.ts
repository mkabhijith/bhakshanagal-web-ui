export interface ISignUpPayload {
  name: string;
  email: string;
  password: string;
}

export interface ISignUpResponce {
  status: boolean;
  message: string;
}
