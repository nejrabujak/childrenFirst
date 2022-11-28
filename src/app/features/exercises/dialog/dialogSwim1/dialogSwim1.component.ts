import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogSwim1.component.html',
  styleUrls: ['./dialogSwim1.component.css']
})
export class DialogSwim1Component implements OnInit {

  constructor() { }

  //  videoUrl = 'https://www.youtube.com/watch?v=5AOIp4gWZ5E';

  apiLoaded = false;

  videoId = '5AOIp4gWZ5E';

  // tslint:disable-next-line:typedef
  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

}
