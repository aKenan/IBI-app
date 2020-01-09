import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/adminService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  get fullName() {return this.adminService.getFullName()};

}
