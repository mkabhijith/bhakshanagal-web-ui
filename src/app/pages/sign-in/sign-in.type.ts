export interface ISignInPayload {
  email: string;
  password: string;
  device_id: string;
  device_os: string;
  device_token: string;
  app_version: string;
}

export interface ISignInResponce {
  result: boolean;
  message: string;
  user_id: number;
  user_name: string;
  user_email: string;
  user_mobile: number;
  user_role: string;
  user_api_key: string;
}
