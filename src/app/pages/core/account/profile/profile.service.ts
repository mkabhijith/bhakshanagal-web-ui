import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProfile } from './profile.type';
import { INormalResponce } from 'src/app/shared/types/normalRes.type';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}
  getProfile() {
    return this.httpClient.post<IProfile>(`bhakshanangal/view-profile`, {});
  }
  editProfile(payload:any){
    return this.httpClient.post<INormalResponce>(`bhakshanangal/edit-profile`,payload)
  }
}
