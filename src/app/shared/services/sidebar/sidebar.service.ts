import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor() {}

  private _sidebarVisible = new BehaviorSubject(false);
  switchSidebarVisible$ = this._sidebarVisible.asObservable();


  changeSidebarVisible(value:boolean){
    this._sidebarVisible.next(value)
  }
}
