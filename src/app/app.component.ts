import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // tslint:disable-next-line:no-inferrable-types
  loadedFeature: string = 'bodyComp';
  bg2: string;
  constructor() {
  this.bg2 = 'http://blog.hostbaby.com/wp-content/uploads/2013/07/bluestripes1920x1234.jpg';
  }

  navigate(feature: string) {
    console.log('set new feature:', feature);
    this.loadedFeature = feature;
      }
  }

