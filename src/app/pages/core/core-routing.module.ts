import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path:'home',
        loadChildren: () => import('../core/home/home.module').then((m)=> m.HomeModule)
      },
      {
          path: '',
          loadChildren: () => import('../core/home/home.module').then((m) => m.HomeModule
          )
        }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
