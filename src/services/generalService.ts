import Swal, { SweetAlertResult } from 'sweetalert2'
import { Injectable } from '@angular/core'
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })

export class GeneralService{

    rootApi : string = 'http://localhost:15079/api';
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

    showSuccess(text:string){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: text,
            showConfirmButton: true,
            timer: 750
          })
    }
}