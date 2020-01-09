import { Injectable } from "@angular/core";

import { Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Http, Headers, Response, ResponseContentType, HttpModule } from "@angular/http";
import { map, take, catchError } from 'rxjs/operators';
import { GeneralService } from "./generalService";
import { ILoginModel, ILoginReturnModel } from "../models/login";

@Injectable({
    providedIn: 'root'
  })

export class AdminService{

    constructor(private gs : GeneralService, private http: HttpClient){}

    login(model : ILoginModel) : Observable<any>{
        return this.http.post(this.gs.getApiUrl('/admin/identity/login'), model).pipe(
            map((response => response as ILoginReturnModel),
            catchError((error => throwError(error)  ))
        )
        )}
    
    setLoginReturnData(model: ILoginReturnModel){
        localStorage.setItem("auth_token", model.token); //set token
        localStorage.setItem("IBI_NAME", model.firstName);
        localStorage.setItem("IBI_LASTNAME", model.lastName);
        localStorage.setItem("IBI_VALIDTO", model.validTo.toString());
    }

    getToken():string{
        return localStorage.getItem("auth_token");
    }

    getFullName():string{
        return `${localStorage.getItem("IBI_NAME")} ${localStorage.getItem("IBI_LASTNAME")}`
    }

    isTokenValid():boolean{        
        let validTo = new Date(localStorage.getItem('IBI_VALIDTO'));
        let now = new Date();
        console.log(validTo, now, now < validTo);
        return now < validTo;

    }
    
    isLoggedIn() : boolean{
        return !!localStorage.getItem('auth_token') && this.isTokenValid();
    }

    logOut(){
        localStorage.removeItem('auth_token');
        localStorage.removeItem('IBI_NAME');
        localStorage.removeItem('IBI_LASTNAME');
        localStorage.removeItem('IBI_VALIDTO');
    }    

}