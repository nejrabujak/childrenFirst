import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogSwim3.component.html',
  styleUrls: ['./dialogSwim3.component.css']
})
export class DialogSwim3Component implements OnInit {

  constructor() { }

  //  videoUrl = 'https://www.youtube.com/watch?v=Q0y4Rd64j80';

  apiLoaded = false;

  videoId = 'Q0y4Rd64j80';

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
