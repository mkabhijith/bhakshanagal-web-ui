import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar/sidebar.service';

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
  constructor(private route: Router, private sidebarService: SidebarService) {}
  @Input()
  set triggerUpdate(value: number) {
    if (value !== 0) {
      this.sidebarVisible = true;
      this.sidebarService.changeSidebarVisible(true);
    }
  }

  sideOptions: ISidebar[] = [
    {
      category: [
        {
          id: 0,
          title: 'All categories',
          route: 'categorys',
          icon: 'pi pi-th-large',
        },
      ],
      Orgin: [
        {
          id: 0,
          title: 'choose Language',
          route: 'origin/language',
          icon: 'pi pi-language',
        },
        {
          id: 1,
          title: 'Choose Country',
          route: 'origin/country',
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

  sideBarOptionSelect(path: string) {
    this.route.navigate([path]);
    this.sidebarVisible = false;
    this.sidebarService.changeSidebarVisible(false);
  }
  onSidebarHide() {
    this.sidebarService.changeSidebarVisible(false);
  }
  onTrue() {
    this.sidebarService.changeSidebarVisible(true);
  }
}
