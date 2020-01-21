import Swal, { SweetAlertResult } from 'sweetalert2'
import { Injectable, ViewChild, ElementRef } from '@angular/core'
import { FormGroup } from '@angular/forms';
import { NgProgressComponent } from '@ngx-progressbar/core';

@Injectable({
    providedIn: 'root'
  })

export class GeneralService{
    //rootApi : string = /*"http://192.168.0.110/api";*/'http://localhost:15079/api';
    rootApi : string = "http://192.168.0.110/api"; //linux VM
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
}