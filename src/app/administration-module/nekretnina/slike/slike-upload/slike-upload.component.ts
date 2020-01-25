import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdminService } from '../../../../../services/adminService';
import { IUcitanaSlika } from '../../../../../models/nekretnina';

@Component({
  selector: 'slike-upload',
  templateUrl: './slike-upload.component.html',
  styleUrls: ['./slike-upload.component.css']
})
export class SlikeUploadComponent implements OnInit {
  @Input() id : number;
  @Output() ucitaneSlike: EventEmitter<any> = new EventEmitter();
  imagesToShow : IUcitanaSlika[] = [];
  
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {      
      const element = event[index];
      console.log(element);      
      var re = /(?:\.([^.]+))?$/;      
      this.checkIfPicture(re.exec(element.name)[1])
      this.createImageFromBlob(element);
    }  
  }

  ucitajSlike() {
    this.adminService.uploadImageMultiple(this.imagesToShow,this.id).subscribe(
      data =>{
        this.ucitaneSlike.emit();
        this.imagesToShow = [];
      }
    )
  }

  createImageFromBlob(image: File) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
        this.imagesToShow.push({file: image, content: reader.result});       
    }, false);

    if (image) {
        reader.readAsDataURL(image);
    }
  }

  // // getImageFromService() {    
  // //   this.adminService.dajSliku().subscribe(data => {
  // //     this.createImageFromBlob(data);      
  // //   }, error => {      
  // //     console.log(error);
  // //   });
  // // }

  removeFromPreview(index: number)
  {
    this.imagesToShow.splice(index, 1);
  }

  checkIfPicture(format: string) : boolean{
    if(format == undefined)
      return false;

    let formats : string[] = ["jpeg", "jpg", "png", "bnp"]
    formats.forEach(element => {
      if(element.toLowerCase() == format.toLowerCase())
      return true;
    });
    return false;
  }

}
