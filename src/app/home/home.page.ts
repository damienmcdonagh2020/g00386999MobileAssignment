import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

myStatus:string = "";

  constructor(private storage:Storage, private camera: Camera, private youtube: YoutubeVideoPlayer) {}

  watchYoutube(){
  this.youtube.openVideo('https://www.youtube.com/watch?v=hGjpZGqYijQ');
  }

ionViewDidEnter(){
  this.storage.create().then(
  () => {
  this.storage.get('status')
  .then((data) => {
  this.myStatus = status;
  })
  .catch();
  })
  .catch();
  }
  }
 

