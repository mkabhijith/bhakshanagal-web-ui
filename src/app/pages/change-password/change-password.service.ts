import { Injectable } from '@angular/core';
import { IChangePasswordPaylod, IChangePasswordResponce } from './change-password.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService {
  constructor(private httpClient: HttpClient) {}

  passwordUpdate(payload: IChangePasswordPaylod) {
    return this.httpClient.post<IChangePasswordResponce>(`bhakshanangal/change-password`, payload);
  }
}
