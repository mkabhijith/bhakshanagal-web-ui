import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http:HttpClient) { }

  getCurrency(){
   return this.http.get
  }
  getcurrencydata(country1: string) {
const url = `${environment.apiUrl}/{latest?base=USD'+ country1}`
    // let url = 'https://api.exchangerate.host/latest?base=USD' + country1;
    return this.http.get(url);
  }
}
