import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IForgotPayload, IForgotResponce, IVerificationResponce } from './forgot.type';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  constructor(private httpClient: HttpClient) {}
  forgotPassWord(email: string) {
    return this.httpClient.post<IForgotResponce>(`bhakshanangal/forgotpassword`, { email });
  }
  otpVerification(payload :IForgotPayload){
    return this.httpClient.post<IVerificationResponce>(`bhakshanangal/verification`,payload)
  }
}
