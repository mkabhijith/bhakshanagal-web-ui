import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { ILanguage } from 'src/app/shared/types/language.type';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private languageService: LanguageService,
    private titleSerice: TitleService,
    private profileService: ProfileService
  ) {}
  onEdit: boolean = false;
  isLoader = false;
  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;
  address: any;
  profileForm = new FormGroup({
    fist_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    current_password: new FormControl(''),
    new_password: new FormControl(''),
    confirm_password: new FormControl(''),
  });
  ngOnInit(): void {
    this.titleSerice.changeTitle('Profile');
    // this.profileForm.setValue({
    //   name: 'rahul',
    //   email: 'yahoo@gmail.com',
    //   number: '000522246',
    // });
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });

    this.profileService.getProfile().subscribe({
      next: (res) => {
        this.profileForm.patchValue({
          fist_name: res.list.fist_name,
          last_name: res.list.last_name,
          email: res.list.email,
        });
        this.address = res.list.address;
      },
    });
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
  navgateToAccount() {
    this.router.navigate(['account']);
  }
  updateProfile() {
    const obj: any = this.profileForm.value;

    obj['address'] = this.address;
    this.isLoader = true;
    this.profileService.editProfile(obj).subscribe({
      next: (res) => {
        if (!res.result) {
          alert('Request Fail');
        }
        this.isLoader = false;
      },
    });
  }
}
