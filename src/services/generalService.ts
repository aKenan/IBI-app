import Swal, { SweetAlertResult, SweetAlertIcon } from 'sweetalert2'
import { Injectable, ViewChild, ElementRef } from '@angular/core'
import { FormGroup } from '@angular/forms';
import { NgProgressComponent } from '@ngx-progressbar/core';
import { Title }     from '@angular/platform-browser';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DefaultUrlSerializer, UrlTree } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })

export class GeneralService{
    rootApi : string = 'http://localhost:15079/api';
    //rootApi : string = "http://192.168.0.110/api"; //linux VM
    //rootApi : string = "http://192.168.0.105:81/api";

    public showAdminLoader : boolean = false;

    public getApiUrl(urlPart : string) : string{
        return `${this.rootApi}${urlPart}`
    }


    setAllTouched(form: FormGroup){
        (<any>Object).values(form.controls).forEach(control => {
            control.markAsTouched();
      
            if (control.controls) {
              this.setAllTouched(control);
            }
          });
        }

    showError(title: string, text:string){
        Swal.fire({
            title: title,
            text: text,
            icon:'error',
            allowEnterKey: true,
            animation:true
          })
    }

    showSuccess(text:string,  timeSpan: number = 1000){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: text,
            showConfirmButton: true,
            timer: timeSpan
          })
    }

    showConfirm(text:string, icon:SweetAlertIcon) : Observable<any>{
      return Observable.create((observer : any) =>{
        Swal.fire({
          title: '',
          text: text,
          icon: icon, //'success' | 'error' | 'warning' | 'info' | 'question'
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Da!',
          cancelButtonText: "Odustani"
        }).then((result) => {
          observer.next(result.value);
        })
      })
      
    }
}

export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
  parse(url: string): UrlTree {
      return super.parse(url.toLowerCase());
  }
}