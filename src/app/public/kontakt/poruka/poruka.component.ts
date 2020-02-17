import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicService } from '../../../../services/publicService';
import { IPoruka } from '../../../../models/public';
import { GeneralService } from '../../../../services/generalService';

@Component({
  selector: 'poruka-public',
  templateUrl: './poruka.component.html',
  styleUrls: ['./poruka.component.css']
})
export class PorukaComponent implements OnInit {
  porukaForm : FormGroup;
  poruka : IPoruka;
  porukaPoslana = false; 
  constructor(private fb : FormBuilder, private publicService: PublicService, private gs:GeneralService) { }

  ngOnInit() {
    this.initForm();
  }
  
  get f(){
    return this.porukaForm.controls;
  }

  initForm(){
    this.porukaForm = this.fb.group({
      naziv:[null, Validators.required],
      sadrzaj: [null, [Validators.required, Validators.minLength(15)]],
      email:[null, [Validators.required, Validators.email]],
      telefon:[null, Validators.minLength(9)]
    })
  }

  posaljiPoruku(){
    this.porukaPoslana = false;
    if(!this.porukaForm.valid)
    {
      console.info("PorukaFormErrors",  this.porukaForm); 
      this.gs.setAllTouched(this.porukaForm)
    }
    else{
      this.publicService.posaljiPoruku(this.porukaForm.value).subscribe(
        data =>{
          this.porukaPoslana = true;
          this.initForm();
        }
      )
    }
  }

}
