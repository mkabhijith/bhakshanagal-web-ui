import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

type ISidebar = {
  category: IsiddBarOptionValue[];
  Orgin: IsiddBarOptionValue[];
  offer: IsiddBarOptionValue[];
  account: IsiddBarOptionValue[];
  service: IsiddBarOptionValue[];
};
type IsiddBarOptionValue = {
  id: number;
  title: string;
  route: string;
  icon: string;
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private route: Router) {}
  @Input()
  set triggerUpdate(value: number) {
    if (value !== 0) {
      this.sidebarVisible = true;
    }
  }

  sideOptions: ISidebar[] = [
    {
      category: [
        {
          id: 0,
          title: 'All categories',
          route: 'categories',
          icon: 'pi pi-th-large',
        },
      ],
      Orgin: [
        {
          id: 0,
          title: 'choose Language',
          route: 'language',
          icon: 'pi pi-language',
        },
        {
          id: 1,
          title: 'Choose Country',
          route: 'country',
          icon: 'pi pi-globe',
        },
      ],
      offer: [
        {
          id: 0,
          title: 'offer zone',
          route: 'offers',
          icon: 'pi pi-money-bill',
        },
      ],
      account: [
        {
          id: 0,
          title: 'My orders',
          route: 'orders',
          icon: 'pi pi-truck',
        },
        {
          id: 1,
          title: 'My Cart',
          route: 'cart',
          icon: 'pi pi-shopping-cart',
        },
        {
          id: 2,
          title: 'My Account',
          route: 'account',
          icon: 'pi pi-user',
        },
      ],
      service: [
        {
          id: 0,
          title: 'help',
          route: 'help',
          icon: '',
        },
        {
          id: 1,
          title: 'About Us',
          route: 'about',
          icon: '',
        },
        {
          id: 2,
          title: 'Contact Us',
          route: 'contact',
          icon: '',
        },
      ],
    },
  ];
  sidebarVisible: boolean = false;
  sideBarOptionSelect(e:string) {
    console.log(e);
    
   this.route.navigate([e])
   this.sidebarVisible = false;
  }
}
