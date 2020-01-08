import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ibi-app';
  admin : boolean = false;

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    //this.admin = this.router.url.toString();
    console.log(this.router.url);
    console.log(this.router.url.toLowerCase().includes('ibiadminpanel'));
  }

  public isAdmin():boolean{
    return this.router.url.toLowerCase().includes('ibiadminpanel');
  }
}

