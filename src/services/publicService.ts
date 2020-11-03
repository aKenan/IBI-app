import { Injectable, SkipSelf } from "@angular/core";

import { Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Http, Headers, Response, ResponseContentType, HttpModule } from "@angular/http";
import { map, take, catchError,  } from 'rxjs/operators';
import { GeneralService } from "./generalService";
import { DllModel, IPoruka, INekretninaBasic, INekretnina } from "../models/public";

@Injectable({
    providedIn: 'root'
  })


  export class PublicService{

    constructor(private gs : GeneralService, private http: HttpClient){}



    dajTipoveNekretnine() : Observable<any>{
        return this.http.get(this.gs.getApiUrl(`/tipoviNekretnine`)).pipe(
            map((response => response as DllModel[]),
            catchError((error => throwError(error)  ))
            )
    )}

    dajsveNekretnine(stranica:number): Observable<INekretninaBasic[]>{
        return this.http.get(this.gs.getApiUrl(`/dajsve/${stranica}`)).pipe(
            map((response => response as INekretninaBasic[]),
            catchError((error => throwError(error)  ))
            )
    )}
    
    dajIzdvojeneNekretnine(): Observable<INekretninaBasic[]>{
        return this.http.get(this.gs.getApiUrl(`/izdvojene`)).pipe(
            map((response => response as INekretninaBasic[]),
            catchError((error => throwError(error)  ))
            )
    )}

    pretragaPojam(pojam:string): Observable<INekretninaBasic[]>{
        return this.http.get(this.gs.getApiUrl(`/pretraga/${pojam}`)).pipe(
            map((response => response as INekretninaBasic[]),
            catchError((error => throwError(error)  ))
            )
    )}

    pretraga(pojam:string, tipProdaje:number, tipNekretnine:number) : Observable<INekretninaBasic[]>{
        return this.http.get(this.gs.getApiUrl(`/pretraga/${pojam}/${tipProdaje}/${tipNekretnine}`)).pipe(
            map((response => response as INekretninaBasic[]),
            catchError((error => throwError(error)  ))
            )
    )}

    posaljiPoruku(poruka : IPoruka): Observable<any>{
        return this.http.post(this.gs.getApiUrl(`/posaljiporuku`), poruka).pipe(
            map((response => response as IPoruka[]),
            catchError((error => throwError(error)  ))
            )
    )}

    dajSliku(lokacija:string) : Observable<any>{
        return this.http.get(this.gs.getApiUrl(`/dajsliku/${lokacija}`), { responseType: 'blob' });
    }

    dajSadrzajSlikeIzBlob(image: Blob) : Observable<any> {
        return Observable.create((observer : any) =>{
            let reader = new FileReader();
            reader.addEventListener("load", () => {
                observer.next(reader.result);    
            }, false);

            if (image) {
                reader.readAsDataURL(image);
            } 
            
        })
        
      }
    
    postaviSadrzajSlike(lokacija: string) : Observable<any>{
        return Observable.create((observer:any) =>{
            this.dajSliku(lokacija).subscribe(
                data => {
                    var sadrzaj = this.dajSadrzajSlikeIzBlob(data).subscribe(
                        data =>{
                            observer.next(data); 
                        }
                    );
                             
                })
        })
                
    }

    dajNekretninu(id:number) : Observable<INekretnina>{
        return this.http.get(this.gs.getApiUrl(`/nekretnina/${id}`)).pipe(
            map((response => response as INekretnina),
            catchError((error => throwError(error)  ))
            )
    )}

    dajSlikaUrl(lokacija:string) : string{
        return this.gs.getApiUrl(`/slika/${lokacija}`)
    }
  }