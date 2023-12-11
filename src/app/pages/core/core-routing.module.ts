import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { authGurd } from './auth-gurd.guard';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    // canActivate: [authGurd],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../core/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../core/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../core/cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'product/:id',
        loadChildren: () =>
          import('../core/product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../core/orders/orders.module').then((m) => m.OrdersModule),
      },
      {
        path: 'orderDetails/:id',
        loadChildren: () =>
          import('../core/orders/order-details/order-details.module').then(
            (m) => m.OrderDetailsModule
          ),
      },
      {
        path: 'offers',
        loadChildren: () =>
          import('../core/offers/offers.module').then((m) => m.OffersModule),
      },
      {
        path: 'offers/:id',
        loadChildren: () =>
          import('../core/offers/offers-list/offers-list.module').then(
            (m) => m.OffersListModule
          ),
      },
      {
        path: 'origin/:id',
        loadChildren: () =>
          import('../core/origin/origin.module').then((m) => m.OriginModule),
      },
      {
        path: 'categorys',
        loadChildren: () =>
          import('../core/category/category.module').then(
            (m) => m.CategoryModule
          ),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../core/account/account.module').then((m) => m.AccountModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
