import { Injectable, ViewChild, ElementRef } from '@angular/core';
//import { ErrorDialogService } from '../error-dialog/errordialog.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError  } from 'rxjs';
import { map, catchError, finalize, delay } from 'rxjs/operators';
import { GeneralService } from '../../services/generalService';
import { NgProgress, NgProgressComponent } from '@ngx-progressbar/core';

@Injectable() export class HttpConfigInterceptor implements HttpInterceptor { 

    constructor(private gs: GeneralService){}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('INTERCEPTOR request', request);
        

        return next.handle(request).pipe(
            delay(0),
            map((event: HttpEvent<any>) => {
                this.gs.showAdminLoader = true;
                if (event instanceof HttpResponse) {
                    
                }   
                console.log("INT EVENT: ", event);          
                return event;
            }),
            catchError((error: any) => {
                this.gs.showError("Greška", error.error.error);
                console.log('error--->>>', error);
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                
                return throwError(error);
            }),
            finalize(() =>{
                this.gs.showAdminLoader = false;
            }));
    }
}