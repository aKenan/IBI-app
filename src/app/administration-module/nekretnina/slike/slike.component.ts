import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../../services/adminService';
import { ISlika, ISlikeSadrzaj } from '../../../../models/nekretnina';
import Swal from 'sweetalert2';
import { GeneralService } from '../../../../services/generalService';

@Component({
  selector: 'slike',
  templateUrl: './slike.component.html',
  styleUrls: ['./slike.component.css']
})
export class SlikeComponent implements OnInit {
  @Input() id : number;
  dodajSlikePrikazi : boolean = false;
  slike : ISlika[] = [];
  slikeSadrzaj : ISlikeSadrzaj[] = [];

  constructor(private adminService: AdminService, private gs: GeneralService) { }

  get glavnaSlika(){return this.slike.length > 0 && this.slike.filter(p=>p.glavna).length > 0}

  ngOnInit() {
    this.dajSlikeZaNekretninu();
  }

  ucitaneSlike(){
    this.dajSlikeZaNekretninu();
  }

  dajSlikeZaNekretninu(){
    this.adminService.dajSlikeZaNekretninu(this.id).subscribe(
      data =>{
        this.slike = data;
        (data as ISlika[]).forEach(element => {
          this.postaviSadrzajSlike(element.id)
          console.log(this.slikeSadrzaj);
        });

      }
      
      )
    }

   dajSadrzajSlikeIzBlob(image: Blob, id: number) : any {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.slike.filter(p=>p.id == id)[0].content = reader.result;
      //this.slikeSadrzaj.push({file: reader.result, id: id});       
    }, false);

    if (image) {
        reader.readAsDataURL(image);
    }    
  }

  postaviSadrzajSlike(id: number){
    let slika = this.slikeSadrzaj.filter(p=>p.id == id);
    if(slika.length == 0)
    {
      this.adminService.dajSliku(id).subscribe(
        data => {
          this.dajSadrzajSlikeIzBlob(data, id);          
        }
      )
    }    
  }

  dajSadrzajSlike(id:number) : File {    
    let slika = this.slikeSadrzaj.filter(p=>p.id == id);
    console.log(slika);
    if(slika.length ==1)
    {
      console.log("usao u return", slika[0].file)
      return slika[0].file;
    }
    else{
      return null;
    }
  }

  obrisiSliku(id:number) {
    Swal.fire({
      title: 'Da li ste sigurni?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Da!',
      cancelButtonText: "Odustani"
    }).then((result) => {
      if (result.value) {
        this.adminService.obrisiSliku(id).subscribe(
          data =>{
            this.gs.showSuccess("Uspješno ste obrisali sliku!");
            //this.dajSlikeZaNekretninu();
            var elem = this.slike.filter(p=>p.id == id)[0];
            var slika = this.slike.indexOf(elem, 0);
            this.slike.splice(slika,1);
          }
        )
      }
    })
  }

  postaviZaGlavnu(id:number)
  {
    let slika = this.slike.filter(p=>p.id == id)[0];
    this.adminService.postaviNaGlavnu(slika).subscribe(
      data => {
        this.slike.forEach(element => {
          element.glavna = false;
        });

        this.slike.filter(p=>p.id == id)[0].glavna = true;
      }
    )
  }
  
}
