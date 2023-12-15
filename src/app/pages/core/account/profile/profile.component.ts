import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  onEdit:boolean =false;

  profileForm =new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    number: new FormControl(),
  })
ngOnInit(): void {
  this.profileForm.setValue({
    name:'rahul',
    email:'yahoo@gmail.com',
    number:'000522246'
  })
}
}
