import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'Glavni meni',
      type: 'header'
    },
    {
      title: 'Nekretnine',
      icon: 'fa fa-home',
      active: false,
      type: 'dropdown',
      // badge: {
      //   text: 'New ',
      //   class: 'badge-warning'
      // },
      submenus: [
        {
          title: 'Pregled Nekretina',
          badge: {
            text: 'Pro ',
            class: 'badge-success'
          },
          url: '/IBIAdminPanel/nekretnine'
        },
        {
          title: 'Dodaj novu nekretninu',
          url:'/IBIAdminPanel/nekretnina/0'
        },
        {
          title: 'Izdvojene nekretnine',
          url:'/IBIAdminPanel/izdvojene'
        }
      ]
    },
    {
      title: 'Postavke',
      icon: 'fa fa-cog',
      active: false,
      type: 'dropdown',
      // badge: {
      //   text: '3',
      //   class: 'badge-danger'
      // },
      submenus: [
        {
          title: 'Opisi',
          url:'/IBIAdminPanel/opisi'
        }
        // {
        //   title: 'Orders'
        // },
        // {
        //   title: 'Credit cart'
        // }
      ]
    },
    {
      title: 'Poruke',
      icon: 'fa fa-envelope',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Pregledaj poruke',
          url:'/IBIAdminPanel/poruke'
        }
      ]
    // },
    // {
    //   title: 'Charts',
    //   icon: 'fa fa-chart-line',
    //   active: false,
    //   type: 'dropdown',
    //   submenus: [
    //     {
    //       title: 'Pie chart',
    //     },
    //     {
    //       title: 'Line chart'
    //     },
    //     {
    //       title: 'Bar chart'
    //     },
    //     {
    //       title: 'Histogram'
    //     }
    //   ]
    // },
    // {
    //   title: 'Maps',
    //   icon: 'fa fa-globe',
    //   active: false,
    //   type: 'dropdown',
    //   submenus: [
    //     {
    //       title: 'Google maps',
    //     },
    //     {
    //       title: 'Open street map'
    //     }
    //   ]
    // },
    // {
    //   title: 'Extra',
    //   type: 'header'
    // },
    // {
    //   title: 'Documentation',
    //   icon: 'fa fa-book',
    //   active: false,
    //   type: 'simple',
    //   badge: {
    //     text: 'Beta',
    //     class: 'badge-primary'
    //   },
    // },
    // {
    //   title: 'Calendar',
    //   icon: 'fa fa-calendar',
    //   active: false,
    //   type: 'simple'
    // },
    // {
    //   title: 'Examples',
    //   icon: 'fa fa-folder',
    //   active: false,
    //   type: 'simple'
     }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
