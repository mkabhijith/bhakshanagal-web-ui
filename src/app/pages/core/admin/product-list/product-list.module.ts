import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { AddProductComponent } from './add-product/add-product.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  declarations: [ProductListComponent, AddProductComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    TranslateModule,
    ScrollPanelModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    InputTextareaModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    FileUploadModule,
    RadioButtonModule,
    FormsModule
  ],
  providers: [ConfirmationService, MessageService],
})
export class ProductListModule {}
