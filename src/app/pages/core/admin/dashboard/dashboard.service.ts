import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}
  getDashboardDetials(){
    return this.httpClient.post<any>(`bhakshanangal/dashboard`,{})
  }
}
