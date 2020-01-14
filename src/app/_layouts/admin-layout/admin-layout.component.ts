import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../services/generalService';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private gs: GeneralService) { }

  ngOnInit() {
    
  }

  get showLoader() { return this.gs.showAdminLoader;}
}
