import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GeneralService } from '../../../services/generalService';
import { SidebarService } from '../../administration-module/sidebar/sidebar.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  encapsulation : ViewEncapsulation.None,
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  
  ngOnInit() {
    
  }
  get showLoader() { return this.gs.showAdminLoader;}

  title = 'angular-pro-sidebar';
  constructor(public sidebarservice: SidebarService, private gs: GeneralService) { }
  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
}
