import { Injectable, SkipSelf } from "@angular/core";

import { Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Http, Headers, Response, ResponseContentType, HttpModule } from "@angular/http";
import { map, take, catchError } from 'rxjs/operators';
import { GeneralService } from "./generalService";
import { ILoginModel, ILoginReturnModel } from "../models/login";
import { ILokacija, IKontakt, INekretnina, IOpisNekretnine} from "../models/nekretnina";
import { ISifarnik } from "../models/sifarnik";

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

    dodajNekretninu(model : INekretnina) : Observable<any>{
        return this.http.post(this.gs.getApiUrl('/admin/Nekretnina'), model, { headers : this.getHeaders() }).pipe(
            map((response => response as INekretnina),
            catchError((error => throwError(error)  ))
            )
    )}

    dajNekretnine() : Observable<any>{
        return this.http.get(this.gs.getApiUrl('/admin/Nekretnina'), { headers : this.getHeaders() }).pipe(
            map((response => response as INekretnina[]),
            catchError((error => throwError(error)  ))
            )
        )}
    
    dajNekretninu(id: number) : Observable<any>{
        return this.http.get(this.gs.getApiUrl(`/admin/Nekretnina/${id}`), { headers : this.getHeaders() }).pipe(
            map((response => response as INekretnina),
            catchError((error => throwError(error)  ))
            )
        )}
    
    azurirajNekretninu(model:INekretnina): Observable<any>{
        return this.http.put(this.gs.getApiUrl('/admin/Nekretnina'), model, { headers : this.getHeaders() }).pipe(
            map((response => response as INekretnina),
            catchError((error => throwError(error)  ))
            )
    )}

    dajSveLokacije() : Observable<any>{
        return this.http.get(this.gs.getApiUrl(`/admin/lokacija`), { headers : this.getHeaders() }).pipe(
            map((response => response as ILokacija[]),
            catchError((error => throwError(error)  ))
            )
    )}

    dajLokaciju(id: number) : Observable<any>{
        return this.http.get(this.gs.getApiUrl(`/admin/lokacija/${id}`), { headers : this.getHeaders() }).pipe(
            map((response => response as ILokacija),
            catchError((error => throwError(error)  ))
            )
    )}

    dajLokacijeZaParent(parentId: number) : Observable<any>{
        return this.http.get(this.gs.getApiUrl(`/admin/lokacija/dajZaParent/${parentId}`), { headers : this.getHeaders() }).pipe(
            map((response => response as ILokacija[]),
            catchError((error => throwError(error)  ))
            )
    )}

    dodajOpisNekretnine(model: IOpisNekretnine): Observable<any>{
        return this.http.post(this.gs.getApiUrl('/admin/OpisNekretnine'), model, { headers : this.getHeaders() }).pipe(
            map((response => response as IOpisNekretnine),
            catchError((error => throwError(error)  ))
            )
    )}

    azurirajOpisNekretnine(model: IOpisNekretnine): Observable<any>{
        return this.http.put(this.gs.getApiUrl('/admin/OpisNekretnine'), model, { headers : this.getHeaders() }).pipe(
            map((response => response as IOpisNekretnine),
            catchError((error => throwError(error)  ))
            )
    )}        
    
    dajSveOpise() : Observable<any>{
        return this.http.get(this.gs.getApiUrl(`/admin/OpisNekretnine`), { headers : this.getHeaders() }).pipe(
            map((response => response as IOpisNekretnine[]),
            catchError((error => throwError(error)  ))
            )
    )}

    dajOpisNekretnine(id: number) : Observable<any>{
        return this.http.get(this.gs.getApiUrl(`/admin/OpisNekretnine/${id}`), { headers : this.getHeaders() }).pipe(
            map((response => response as IOpisNekretnine[]),
            catchError((error => throwError(error)  ))
            )
    )}

    dajSveSifarnike() : Observable<any>{
        return this.http.get(this.gs.getApiUrl(`/admin/sifarnik/dajsve`), { headers : this.getHeaders() }).pipe(
            map((response => response as ISifarnik[]),
            catchError((error => throwError(error)  ))
            )
    )}

    getHeaders() : HttpHeaders{
        let headers = new HttpHeaders({
            'Authorization': "Bearer " + this.getToken()
        });

        return headers;
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