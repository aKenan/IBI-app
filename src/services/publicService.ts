import { Injectable, SkipSelf } from "@angular/core";

import { Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Http, Headers, Response, ResponseContentType, HttpModule } from "@angular/http";
import { map, take, catchError } from 'rxjs/operators';
import { GeneralService } from "./generalService";
import { DllModel } from "../models/public";

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

    pretraga(pojam:string, tipProdaje:number, tipNekretnine:number) : Observable<any>{
        return this.http.get(this.gs.getApiUrl(`/pretraga/${pojam}/${tipProdaje}/${tipNekretnine}`)).pipe(
            map((response => response as any[]),
            catchError((error => throwError(error)  ))
            )
    )}
  }