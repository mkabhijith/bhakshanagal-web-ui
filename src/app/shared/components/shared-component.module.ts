import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { CardComponent } from './card/card.component';

import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { PrimaryButtonComponent } from './buttons/primary-button/primary-button.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    NavbarComponent,
    LanguageSelectorComponent,
    CardComponent,
    PrimaryButtonComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    InputTextModule,
    RouterModule,
    ReactiveFormsModule,
    BadgeModule
  ],
  exports: [
    NavbarComponent,
    LanguageSelectorComponent,
    PrimaryButtonComponent
  ],
})
export class SharedComponentModule { }
