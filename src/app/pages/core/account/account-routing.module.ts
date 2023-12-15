import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';
import { AddAddressComponent } from 'src/app/shared/components/add-address/add-address.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'address',
        component: AddressComponent,
      },
      {
        path: 'addAddress',
        component: AddAddressComponent,
      },
      {
        path: 'addAddress/:id',
        component: AddAddressComponent,
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('../account/my-notifications/my-notifications.module').then(
            (m) => m.MyNotificationsModule
          ),
      },
      {
        path: 'reviews',
        loadChildren: () =>
          import('../account/my-review-rating/my-review-rating.module').then(
            (m) => m.MyReviewRatingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
