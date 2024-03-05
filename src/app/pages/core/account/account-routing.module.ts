import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';
import { AddAddressComponent } from 'src/app/shared/components/add-address/add-address.component';
import { OrdersComponent } from '../orders/orders.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { OrderDetailsComponent } from './order-info/order-details/order-details.component';
import { ReturnsComponent } from './returns/returns.component';
import { MyCancelationComponent } from './my-cancelation/my-cancelation.component';
import { NotificationsComponent } from './notifications/notifications.component';
// import { OrderDetailsComponent } from '../orders/order-details/order-details.component';

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
        path: 'orders',
        children: [
          {
            path: '',
            component: OrderInfoComponent,
          },
          {
            path: 'orderInfo/:id',
            component: OrderDetailsComponent,
          },
        ],
      },
      {
        path: 'return',
        component: ReturnsComponent,
      },
      {
        path: 'cancel-list',
        component: MyCancelationComponent,
      },
      {
        path: 'orderDetails/:id',
        component: OrderDetailsComponent,
      },
      {
        path: 'addAddress/:id',
        component: AddAddressComponent,
      },
      { path: 'notifications', component: NotificationsComponent },
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
