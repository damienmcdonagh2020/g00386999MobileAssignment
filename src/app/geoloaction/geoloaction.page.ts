import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-geoloaction',
  templateUrl: './geoloaction.page.html',
  styleUrls: ['./geoloaction.page.scss'],
})
export class GeoloactionPage implements OnInit {
lat: any;
long:any;
  constructor(private geolocation: Geolocation) { }

  

  ngOnInit() {
  }

  GPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
     this.lat = resp.coords.latitude;
       this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
  }
}


