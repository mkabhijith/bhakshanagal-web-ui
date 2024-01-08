import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddProductComponent } from './product-list/add-product/add-product.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { authGurd } from '../auth-gurd.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate:[authGurd],
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
        path: 'stockList',
        component: StocksListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
