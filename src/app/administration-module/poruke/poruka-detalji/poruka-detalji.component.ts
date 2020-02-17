import { Component, OnInit, Input } from '@angular/core';
import { IPoruka } from '../../../../models/public';

@Component({
  selector: 'poruka-detalji',
  templateUrl: './poruka-detalji.component.html',
  styleUrls: ['./poruka-detalji.component.css']
})
export class PorukaDetaljiComponent implements OnInit {
  @Input() poruka : IPoruka
  constructor() { }

  ngOnInit() {
    
  }

}
