import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogBubbles.component.html',
  styleUrls: ['./dialogBubbles.component.css']
})
export class DialogBubblesComponent implements OnInit {

  constructor() { }

  //  videoUrl = 'https://www.youtube.com/watch?v=ylnZry9fpKY';

  apiLoaded = false;

  videoId = 'ylnZry9fpKY';

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
