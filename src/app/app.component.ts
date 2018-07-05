import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // tslint:disable-next-line:no-inferrable-types
  loadedFeature: string = 'bodyComp';
  // bg: string;
  bg2: string;
  constructor() {
    // tslint:disable-next-line:max-line-length
    // this.bg = 'https://www.dhresource.com/0x0s/f2-albu-g3-M00-F1-70-rBVaHVSv75-AeppOAAaQTMblXTE043.jpg/vinyl-custom-photography-backdrops-brick.jpg';
    this.bg2 = 'http://blog.hostbaby.com/wp-content/uploads/2013/07/scuffedstatic_blue_1920x1234.jpg';
  }

  navigate(feature: string) {
    console.log('set new feature:', feature);
    this.loadedFeature = feature;
      }
}
