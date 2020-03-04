import { Injectable, SkipSelf } from "@angular/core";

import { Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Http, Headers, Response, ResponseContentType, HttpModule } from "@angular/http";
import { map, take, catchError } from 'rxjs/operators';
import { GeneralService } from "./generalService";
import { ILoginModel, ILoginReturnModel } from "../models/login";
import { ILokacija, IKontakt, INekretnina, IOpisNekretnine, INekretninaOpisNekretnine, IUcitanaSlika, ISlika, IOpciPodaci, IIzdvojenaNekretninaViewModel} from "../models/nekretnina";
import { ISifarnik } from "../models/sifarnik";
import { TipSifarnikaEnum } from "../models/enums/enums";
import { IPorukaAdmin } from "../models/admin";

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

    aktivirajNekretninu(model:INekretnina) : Observable<any>{
        return this.http.patch(this.gs.getApiUrl('/admin/Nekretnina/aktivirajNekretninu'), model, { headers : this.getHeaders() }).pipe(
            map((response => response as any),
            catchError((error => throwError(error)  ))
            )
        )}

    dektivirajNekretninu(model:INekretnina) : Observable<any>{
        return this.http.patch(this.gs.getApiUrl('/admin/Nekretnina/deaktivirajNekretninu'), model, { headers : this.getHeaders() }).pipe(
            map((response => response as any),
            catchError((error => throwError(error)  ))
            )
        )}

    obrisiNekretninu(id:number) : Observable<any>{
        return this.http.delete(this.gs.getApiUrl(`/admin/Nekretnina/obrisiNekretninu/${id}`),  { headers : this.getHeaders() }).pipe(
            map((response => response as any),
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

    dajOpiseZaNekretninu(idNekretnine: number): Observable<any>{
        return this.http.get(this.gs.getApiUrl(`/admin/Nekretnina/dajopisezanekretninu/${idNekretnine}`), { headers : this.getHeaders() }).pipe(
            map((response => response as INekretninaOpisNekretnine[]),
            catchError((error => throwError(error)  ))
            )
    )}

    dodajOpisZaNekretninu(model: INekretninaOpisNekretnine): Observable<any>{
        return this.http.post(this.gs.getApiUrl('/admin/Nekretnina/dodajOpisNekretnine'), model, { headers : this.getHeaders() }).pipe(
            map((response => response as INekretninaOpisNekretnine),
            catchError((error => throwError(error)  ))
            )
    )}

    azurirajOpisZaNekretninu(model: INekretninaOpisNekretnine): Observable<any>{
        return this.http.put(this.gs.getApiUrl('/admin/Nekretnina/azurirajOpisNekretnine'), model, { headers : this.getHeaders() }).pipe(
            map((response => response as INekretninaOpisNekretnine),
            catchError((error => throwError(error)  ))
            )
    )}

    dajSveSifarnike() : Observable<any>{
        return this.http.get(this.gs.getApiUrl(`/admin/sifarnik/dajsve`), { headers : this.getHeaders() }).pipe(
            map((response => response as ISifarnik[]),
            catchError((error => throwError(error)  ))
            )
    )}

    dajSifarnikPoTipu(tip : TipSifarnikaEnum) : Observable<any>{
        return this.http.get(this.gs.getApiUrl(`/admin/sifarnik/dajpotipu/${tip}`), { headers : this.getHeaders() }).pipe(
            map((response => response as ISifarnik[]),
            catchError((error => throwError(error)  ))
            )
    )}

     uploadImage(file:File, id:number):Observable<any>{
        const uploadData = new FormData();
        uploadData.append('file', file, file.name);
        return this.http.post(this.gs.getApiUrl(`/admin/Nekretnina/ucitajSliku`), uploadData, { headers : this.getImageHeaders(id) }).pipe(
            map((response => response as ISifarnik[]),
            catchError((error => throwError(error)  ))
            ))
     }      

     uploadImageMultiple(files: IUcitanaSlika[], id:number):Observable<any>{
        const uploadData = new FormData();
        files.forEach(element => {
            uploadData.append('file', element.file, element.file.name);
        });
        
        return this.http.post(this.gs.getApiUrl(`/admin/Nekretnina/ucitajSlike`), uploadData, { headers : this.getImageHeaders(id) }).pipe(
            map((response => response as ISifarnik[]),
            catchError((error => throwError(error)  ))
            ))
     }      
     
     dajSliku(id:number) : Observable<Blob> {
        return this.http.get(this.gs.getApiUrl(`/admin/Nekretnina/dajsliku/${id}`), { headers : this.getHeaders(), responseType: 'blob' });
      }

    dajSlikeZaNekretninu(nekretninaId: number) : Observable<any>{
        return this.http.get(this.gs.getApiUrl(`/admin/Nekretnina/dajslikezanekretninu/${nekretninaId}`), { headers : this.getHeaders() }).pipe(
            map((response => response as ISlika[]),
            catchError((error => throwError(error)  ))
            )
    )}

    postaviNaGlavnu(model: ISlika): Observable<any>{
        return this.http.patch(this.gs.getApiUrl('/admin/Nekretnina/postavislikunaglavnu'), model, { headers : this.getHeaders() }).pipe(
            map((response => response as ISlika),
            catchError((error => throwError(error)  ))
            )
    )}

    obrisiSliku(id:number): Observable<any>{
        return this.http.delete(this.gs.getApiUrl(`/admin/Nekretnina/obrisiSliku/${id}`), { headers : this.getHeaders() }).pipe(
            map((response => response),
            catchError((error => throwError(error)  ))
            )
    )}

    dajOpcePodatke() : Observable<IOpciPodaci>{
        return this.http.get(this.gs.getApiUrl(`/admin/Nekretnina/dajopcepodatke`), { headers : this.getHeaders() }).pipe(
            map((response => response as IOpciPodaci),
            catchError((error => throwError(error)  ))
            )
    )}

    dajPoruke():Observable<IPorukaAdmin[]>{
        return this.http.get(this.gs.getApiUrl(`/admin/Poruka`), { headers : this.getHeaders() }).pipe(
            map((response => response as IPorukaAdmin[]),
            catchError((error => throwError(error)  ))
            )
    )}

    dajPorukeZaNekretninu(nekretninaId:number):Observable<IPorukaAdmin[]>{
        return this.http.get(this.gs.getApiUrl(`/admin/Poruka/dajzanekretninu/${nekretninaId}`), { headers : this.getHeaders() }).pipe(
            map((response => response as IPorukaAdmin[]),
            catchError((error => throwError(error)  ))
            )
    )}

    postaviPorukuProcitana(poruka: IPorukaAdmin) : Observable<any>{
        return this.http.patch(this.gs.getApiUrl(`/admin/Poruka/postaviProcitana`), poruka,{ headers : this.getHeaders() }).pipe(
            map((response => response as any),
            catchError((error => throwError(error)  ))
            )
    )}

    postaviPorukuOdgovorena(poruka: IPorukaAdmin) : Observable<any>{
        return this.http.patch(this.gs.getApiUrl(`/admin/Poruka/postaviOdgovorena`), poruka,{ headers : this.getHeaders() }).pipe(
            map((response => response as any),
            catchError((error => throwError(error)  ))
            )
    )}

    obrisiPoruku(porukaId: number) : Observable<any>{
        return this.http.delete(this.gs.getApiUrl(`/admin/Poruka/${porukaId}`),{ headers : this.getHeaders() }).pipe(
            map((response => response as any),
            catchError((error => throwError(error)  ))
            )
    )}

    dodajIzdvojenuNekretninu(model: IIzdvojenaNekretninaViewModel): Observable<any>{
        return this.http.post(this.gs.getApiUrl('/admin/Nekretnina/dodajIzdvojenuNekretninu'), model, { headers : this.getHeaders() }).pipe(
            map((response => response as IIzdvojenaNekretninaViewModel),
            catchError((error => throwError(error)  ))
            )
    )}

    azurirajIzdvojenuNekretninu(model: IIzdvojenaNekretninaViewModel): Observable<any>{
        return this.http.put(this.gs.getApiUrl('/admin/Nekretnina/azurirajIzdvojenuNekretninu'), model, { headers : this.getHeaders() }).pipe(
            map((response => response as IIzdvojenaNekretninaViewModel),
            catchError((error => throwError(error)  ))
            )
    )}

    dajIzdvojeneNekretnine():Observable<IIzdvojenaNekretninaViewModel[]>{
        return this.http.get(this.gs.getApiUrl(`/admin/Poruka/dajzanekretninu`), { headers : this.getHeaders() }).pipe(
            map((response => response as IIzdvojenaNekretninaViewModel[]),
            catchError((error => throwError(error)  ))
            )
    )}

    dajIzdvojenuNekretninu(nekretninaId: number):Observable<IIzdvojenaNekretninaViewModel>{
        return this.http.get(this.gs.getApiUrl(`/admin/Poruka/dajIzdvojenuNekretninu/${nekretninaId}`), { headers : this.getHeaders() }).pipe(
            map((response => response as IIzdvojenaNekretninaViewModel),
            catchError((error => throwError(error)  ))
            )
    )}

    getHeaders() : HttpHeaders{
        let headers = new HttpHeaders({
            'Authorization': "Bearer " + this.getToken()
        });

        return headers;
    }

    getImageHeaders(id: number) : HttpHeaders{
        let headers = new HttpHeaders({
            'Authorization': "Bearer " + this.getToken(),
            'nekretninaId' : id.toString()
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
        window.location.reload();
    }    

}