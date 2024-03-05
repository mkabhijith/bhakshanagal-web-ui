import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddProductComponent } from './product-list/add-product/add-product.component';
import { authGurd } from '../auth-gurd.guard';
import { OffersComponent } from './offers/offers.component';
import { OrdersComponent } from './orders/orders.component';
import { PaynentComponent } from './paynent/paynent.component';
import { AddOffersComponent } from './offers/add-offers/add-offers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // canActivate:[authGurd],
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'addProduct',
        component: AddProductComponent,
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../admin/product-list/product-list.module').then(
            (m) => m.ProductListModule
          ),
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'offersList',
        component: OffersComponent,
      },
      {
        path: 'orderList',
        component: OrdersComponent,
      },
      {
        path: 'addOffers',
        component: AddOffersComponent,
      },
      {
        path: 'paymentList',
        component: PaynentComponent,
      },
      {
        path:'users',
        component:UsersComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
