import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { GeneralService } from '../../../services/generalService';
import { AdminService } from '../../../services/adminService';
import { Router } from '@angular/router';


@Component({
  selector: 'admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private toggleButton;
  private sidebarVisible: boolean;
  
  public isCollapsed = true;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    // this.listTitles = ROUTES.filter(listTitle => listTitle);
    //     var navbar : HTMLElement = this.element.nativeElement;
    //     this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    //     this.router.events.subscribe((event) => {
    //       this.sidebarClose();
    //    });
  }
  getTitle(){
    // var titlee = this.location.prepareExternalUrl(this.location.path());
    // if(titlee.charAt(0) === '#'){
    //     titlee = titlee.slice( 1 );
    // }
    // for(var item = 0; item < this.listTitles.length; item++){
    //     if(this.listTitles[item].path === titlee){
    //         return this.listTitles[item].title;
    //     }
    // }
    // return 'Dashboard';
    return "AdminPanel";
  }
  sidebarToggle() {
    if (this.sidebarVisible === false) {
        this.sidebarOpen();
    } else {
        this.sidebarClose();
    }
  }
  sidebarOpen() {
      const toggleButton = this.toggleButton;
      const html = document.getElementsByTagName('html')[0];
      const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
      setTimeout(function(){
          toggleButton.classList.add('toggled');
      }, 500);

      html.classList.add('nav-open');
      if (window.innerWidth < 991) {
        mainPanel.style.position = 'fixed';
      }
      this.sidebarVisible = true;
  };
  sidebarClose() {
      const html = document.getElementsByTagName('html')[0];
      const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
      if (window.innerWidth < 991) {
        setTimeout(function(){
          mainPanel.style.position = '';
        }, 500);
      }
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      html.classList.remove('nav-open');
  };

  collapse(){
    this.isCollapsed = !this.isCollapsed;
    const navbar = document.getElementsByTagName('nav')[0];
    console.log(navbar);
    if (!this.isCollapsed) {
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('bg-white');
    }else{
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('bg-white');
    }

  }

  get fullName() {return this.adminService.getFullName()}

  odjava(){
    this.adminService.logOut();
    window.location.reload();
  }

}
