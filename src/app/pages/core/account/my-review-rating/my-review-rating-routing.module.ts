import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyReviewRatingComponent } from './my-review-rating.component';

const routes: Routes = [
  {
    path:'',
    component:MyReviewRatingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyReviewRatingRoutingModule { }
