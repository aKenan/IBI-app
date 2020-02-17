import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kontakt-public',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {
  latitude = 43.8571;//43.857124;
  longitude = 18.4088;//18.408803;
  zoom = 17;
  location = "../../../assets/images/ibi_logo_sm.jpg"
  constructor() { }

  ngOnInit() {
  }

}
