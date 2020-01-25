import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../../services/adminService';
import { ISlika, ISlikeSadrzaj } from '../../../../models/nekretnina';

@Component({
  selector: 'slike',
  templateUrl: './slike.component.html',
  styleUrls: ['./slike.component.css']
})
export class SlikeComponent implements OnInit {
  @Input() id : number;
  slike : ISlika[] = [];
  slikeSadrzaj : ISlikeSadrzaj[] = [];
  constructor(private adminService: AdminService) { }

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
  
}
