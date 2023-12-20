import { Injectable } from '@angular/core';
import { ISignUpPayload, ISignUpResponce } from './sign-up.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private httpClient: HttpClient) {}
  userSignUp(payload: ISignUpPayload) {
    return this.httpClient.post<ISignUpResponce>(
      `bhakshanangal/signup`,
      payload
    );
  }
}
