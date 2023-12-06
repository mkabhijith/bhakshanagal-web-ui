import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { SidbarCardComponent } from 'src/app/shared/components/sidbar-card/sidbar-card.component';

const routes: Routes = [
  {
    path: '',
    component: SidbarCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
