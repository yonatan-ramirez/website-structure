import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  constructor() {
    // tslint:disable-next-line:max-line-length
    this.img1 = 'https://scontent-lax3-1.cdninstagram.com/vp/985f397440e9daf500fb6f9a7a5e7800/5BDD9BCA/t51.2885-15/sh0.08/e35/p640x640/35616723_1042585865890384_8928787943783399424_n.jpg';
    // tslint:disable-next-line:max-line-length
    this.img2 = 'https://scontent-lax3-1.cdninstagram.com/vp/9a4e307f7302b43e4ead7288e46a04a4/5BC998EF/t51.2885-15/e35/c0.135.1080.1080/s240x240/35249406_314149279121632_8511363624223113216_n.jpg?efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV9pZyJ9';
    // tslint:disable-next-line:max-line-length
    this.img3 = 'https://scontent-lax3-1.cdninstagram.com/vp/69364578325824ae6eec806f0f112ba1/5BDA9A33/t51.2885-15/s240x240/e35/c0.135.1080.1080/34983216_238456966750923_858860791955193856_n.jpg';
    // tslint:disable-next-line:max-line-length
    this.img4 = 'https://scontent-lax3-1.cdninstagram.com/vp/8ff1770ca8a8132612f47b519fce6e22/5BC78E76/t51.2885-15/s240x240/e35/c0.134.1080.1080/35432821_1771403766309158_2688746275729309696_n.jpg';
    // tslint:disable-next-line:max-line-length
    this.img5 = 'https://scontent-lax3-1.cdninstagram.com/vp/387698703f3d0cc45e16a24724806fb3/5BE118AF/t51.2885-15/e35/c0.135.1080.1080/s240x240/36136958_280867102474163_4437985008262578176_n.jpg?efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV9pZyJ9';
    // tslint:disable-next-line:max-line-length
    this.img6 = 'https://scontent-lax3-1.cdninstagram.com/vp/c39936975d1659646544da382f4f0d04/5BE85945/t51.2885-15/e35/c0.135.1080.1080/s240x240/36038365_260272244721685_6716179333011996672_n.jpg?efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV9pZyJ9';
   }

  ngOnInit() {
  }

}
