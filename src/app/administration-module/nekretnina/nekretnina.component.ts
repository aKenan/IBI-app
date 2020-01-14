import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nekretnina',
  templateUrl: './nekretnina.component.html',
  styleUrls: ['./nekretnina.component.css']
})
export class NekretninaComponent implements OnInit {
  id: number = 0;
  
  constructor(private router: Router, private ar: ActivatedRoute) { 
    this.id = parseInt(this.ar.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
    console.log(this.id);    
  }



}
