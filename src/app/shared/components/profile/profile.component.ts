import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private route:Router){}
  show: boolean = false;
  languageArray = [{
    'item': 'accoount'
  }, {
    'item': 'cancel'
  }]

  onDropdown() {
    this.show = !this.show;
  }
  onHideDropdown() {
    this.show = false;
  }
  logOut(){
    localStorage.clear() 
    this.route.navigateByUrl('/signin');
  }
}
