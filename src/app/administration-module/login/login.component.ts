import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GeneralService } from '../../../services/generalService';
import { AdminService } from '../../../services/adminService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private fb: FormBuilder, private gs: GeneralService, private adminService: AdminService, private router : Router ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() { return this.loginForm.controls; }

  login(){    
    console.log(this.loginForm);
    if(!this.loginForm.valid){
      this.gs.setAllTouched(this.loginForm);
    }
    else{
      this.adminService.login(this.loginForm.value).subscribe(
        data => {
          this.adminService.setLoginReturnData(data);
          this.gs.showSuccess('Uspješna prijava');
          this.router.navigate(['../IBIAdminPanel']);
        }
        // },
        // error => {
        //   console.log(error);
        //   this.gs.showError('Neuspješna prijava', error.error);
        // }
      )
    }
  }

}
