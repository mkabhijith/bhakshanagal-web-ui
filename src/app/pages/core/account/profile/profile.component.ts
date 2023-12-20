import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router) {}
  onEdit: boolean = false;

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    number: new FormControl(),
  });
  ngOnInit(): void {
    this.profileForm.setValue({
      name: 'rahul',
      email: 'yahoo@gmail.com',
      number: '000522246',
    });
  }
  navgateToAccount() {
    this.router.navigate(['account']);
  }
}
