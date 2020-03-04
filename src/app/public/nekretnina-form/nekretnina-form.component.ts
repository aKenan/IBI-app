import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../../services/publicService';
import { INekretnina } from '../../../models/public';
import { ActivatedRoute } from '@angular/router';
  import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'nekretnina-form',
  templateUrl: './nekretnina-form.component.html',
  styleUrls: ['./nekretnina-form.component.css']
})
export class NekretninaFormComponent implements OnInit {
  nekretnina: INekretnina = {};
  id:number;
  galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[] = [];

  constructor(private publicService: PublicService, private ar: ActivatedRoute) {
    this.id = parseInt(this.ar.snapshot.paramMap.get("id"));
   }

  ngOnInit() {
    this.dajNekretninu();
    this.initGallery();
  }

  dajNekretninu(){
    this.publicService.dajNekretninu(this.id).subscribe(
      data=>{
        this.nekretnina = data; 
        this.obradiSlike(data.slika,data.slike);
      }
    )
  }

  obradiSlike(glavna:string, slike:string[]){    
    slike.forEach(slika => {      
      this.publicService.postaviSadrzajSlike(slika).subscribe(
        data =>{
          this.galleryImages.push({
            small:data,
            medium:data,
            big:data
          });
        }
      );
    });
  }
  
  initGallery(){
    this.galleryOptions = [
      {
          width: '80%',
          height: '500px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '500px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

//   this.galleryImages = [
//     {
//         small: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
//         medium: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
//         big: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
//     },
//     {
//         small: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
//         medium: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
//         big: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
//     },
//     {
//         small: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
//         medium: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
//         big: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'

//     }
// ];
  }


}
