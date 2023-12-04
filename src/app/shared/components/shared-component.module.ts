import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimaryButtonComponent } from './buttons/primary-button/primary-button.component';
import { ProfileComponent } from './profile/profile.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProductListComponent } from './product-list/product-list.component';

import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    NavbarComponent,
    LanguageSelectorComponent,
    CardComponent,
    PrimaryButtonComponent,
    ProfileComponent,
    SpinnerComponent,
    SidebarComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    InputTextModule,
    RouterModule,
    ReactiveFormsModule,
    BadgeModule,
    SidebarModule,
    ButtonModule,
    DividerModule,
    CardModule
  ],
  exports: [
    NavbarComponent,
    LanguageSelectorComponent,
    PrimaryButtonComponent,
    ProductListComponent
  ],
})
export class SharedComponentModule { }
