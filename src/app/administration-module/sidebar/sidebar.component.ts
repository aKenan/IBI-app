import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from './sidebar.service';
import { AdminService } from '../../../services/adminService';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

// export const ROUTES: RouteInfo[] = [
//   { path: '/IBIAdminPanel',     title: 'Admin početna',         icon:'nc-bank',       class: '' },
//   { path: '/IBIAdminPanel/nekretnine',    title: 'Nekretnine',        icon:'nc-shop',    class: '' },
//   { path: '/IBIAdminPanel/opisi',    title: 'Opisi',        icon:'nc-spaceship',    class: '' },
//   { path: '/IBIAdminPanel/Poruke',          title: 'Poruke',              icon:'nc-bell-55',      class: '' },
//   // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
//   // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
//   // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
//   // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
//   // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' }, 
// ];

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  nazivKorisnika = '';
  brojNovihPoruka = 0;
  menus = [];
  constructor(public sidebarservice: SidebarService, public adminService: AdminService) {
    this.menus = sidebarservice.getMenuList();
   }

  ngOnInit() {
    this.nazivKorisnika = this.adminService.getFullName();
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarservice.hasBackgroundImage;
  }

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }

  odjaviSe(){
    this.adminService.logOut();
  }

}
