import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/core/core.module').then(
        (m) => m.CoreModule
      )
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./pages/sign-in/sign-in.module').then(
        (m) => m.SignInModule
      )
  },
  {
    path: 'signup',
    loadChildren: ()=>
    import('./pages/sign-up/sign-up.module').then(
      (m)=>m.SignUpModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
