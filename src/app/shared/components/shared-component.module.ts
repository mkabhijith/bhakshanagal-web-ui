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


@NgModule({
  declarations: [
    NavbarComponent,
    LanguageSelectorComponent,
    CardComponent
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
    LanguageSelectorComponent
  ],
})
export class SharedComponentModule { }
