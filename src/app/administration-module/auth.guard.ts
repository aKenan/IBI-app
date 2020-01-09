import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AdminService } from '../../services/adminService';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
  constructor(private adminService: AdminService, private router: Router) {}

  async canActivate() {
    
    if(!this.adminService.isLoggedIn())
    {
       this.router.navigate(['/IBIAdminPanel/login']);
       return false;
    }
    //else if(!this.auth.isTokenValid()){
      //return false;
    //}

    return true;
  }
}