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
import { AddAddressComponent } from './add-address/add-address.component';
import { SidbarCardComponent } from './sidbar-card/sidbar-card.component';
import { EditDeleteButtonComponent } from './edit-delete-button/edit-delete-button.component';
import { BackBtnComponent } from './back-btn/back-btn.component';

import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    NavbarComponent,
    LanguageSelectorComponent,
    CardComponent,
    PrimaryButtonComponent,
    ProfileComponent,
    SpinnerComponent,
    SidebarComponent,
    ProductListComponent,
    SidbarCardComponent,
    AddAddressComponent,
    EditDeleteButtonComponent,
    BackBtnComponent,
    
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
    CardModule,
    InputNumberModule,
    InputTextareaModule,
    RadioButtonModule,
    TranslateModule
  ],
  exports: [
    NavbarComponent,
    LanguageSelectorComponent,
    PrimaryButtonComponent,
    ProductListComponent,
    SidbarCardComponent,
    EditDeleteButtonComponent,
    SpinnerComponent,
    BackBtnComponent
  ],
})
export class SharedComponentModule { }
