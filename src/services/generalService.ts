import Swal from 'sweetalert2'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
  })

export class GeneralService{

    rootApi : string = 'http://localhost:15079/api';

    public getApiUrl(urlPart : string) : string{
        return `${this.rootApi}${urlPart}`
    }

    showError(title: string, text:string){
        Swal.fire({
            title:'Greška',
            text:'Korisničko ime ili lozinka nisu ispravni',
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