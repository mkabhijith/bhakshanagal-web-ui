import { FormControl } from '@angular/forms';

export interface IForgotForm {
  email: FormControl<string | null>;
  code: FormControl<number | null>;
}

export interface IForgotResponce {
  status: boolean;
  message: string;
}

export interface IVerificationResponce {
  result: boolean;
  message: string;
}

export interface IForgotPayload {
  email: string;
  code: number;
}
