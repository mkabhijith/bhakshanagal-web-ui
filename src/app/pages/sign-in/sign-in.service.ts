import { Injectable } from '@angular/core';
import { ISignInPayload } from './sign-in.types';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor() { }

  signIN(payload: ISignInPayload) {
    localStorage.setItem('Token', payload.password);
    console.log('');
    
    return {}
  }
}
