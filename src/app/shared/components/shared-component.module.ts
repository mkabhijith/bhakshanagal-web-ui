import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';

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
import { CategoryListComponent } from './category-list/category-list.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryProductListComponent } from './category-product-list/category-product-list.component';

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
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CategoryComponent } from './category/category.component';
import { SecoundaryButtonComponent } from './buttons/secoundary-button/secoundary-button.component';

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
    CategoryListComponent,
    FooterComponent,
    CategoryProductListComponent,
    CardHeaderComponent,
    CategoryComponent,
    SecoundaryButtonComponent,
    
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
    TranslateModule,
    ScrollPanelModule,
    CarouselModule,
    DropdownModule,
    FormsModule,
    RatingModule
  ],
  exports: [
    NavbarComponent,
    LanguageSelectorComponent,
    PrimaryButtonComponent,
    ProductListComponent,
    SidbarCardComponent,
    EditDeleteButtonComponent,
    SpinnerComponent,
    BackBtnComponent,
    CategoryListComponent,
    FooterComponent,
    CategoryProductListComponent,
    CardHeaderComponent,
    CategoryComponent,
    SecoundaryButtonComponent
  ],
})
export class SharedComponentModule { }
