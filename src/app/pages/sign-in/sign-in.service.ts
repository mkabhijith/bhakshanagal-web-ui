import { Injectable } from '@angular/core';
import { ISignInPayload } from './sign-in.types';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) {}

  signIn(payload: ISignInPayload) {
    this.storageService.saveAuthKey({ authKey: payload.password });
    return this.httpClient.post<any>(`bhakshanangal/login`, payload).pipe(
      tap(({ data }) => {
        if (data) {
          console.log(data);
        }
      })
    );
  }
}
