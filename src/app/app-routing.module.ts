import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosterComponent } from './pages/poster/poster.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/core/core.module').then((m) => m.CoreModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: 'launching',
    component: PosterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
