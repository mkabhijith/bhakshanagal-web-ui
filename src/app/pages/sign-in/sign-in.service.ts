import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { ISignInPayload, ISignInResponce } from './sign-in.type';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) {}

  signIn(payload: ISignInPayload) {
    const deviceDetails = {
      device_id: 'AR01QW4561255',
      device_os: 'android',
      device_token: 'fknkskdnknsal4545sdsd',
      app_version: '0.1',
    };

    const mergePayload = { ...payload, ...deviceDetails };

    return this.httpClient
      .post<ISignInResponce>(`bhakshanangal/login`, mergePayload)
      .pipe(
        tap(({ user_api_key }) => {
          if (user_api_key) {
            this.storageService.saveAuthKey({ authKey: user_api_key });
          }
        })
      );
  }
}
