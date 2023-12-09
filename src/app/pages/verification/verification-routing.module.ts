import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Add import statement for Routes

import { VerificationComponent } from './verification.component';

const routes: Routes = [
  {
    path: '',
    component: VerificationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Add RouterModule.forChild(routes) here
  ],
})
export class VerificationRoutingModule { }

