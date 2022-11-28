import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogSwim4.component.html',
  styleUrls: ['./dialogSwim4.component.css']
})
export class DialogSwim4Component implements OnInit {

  constructor() { }

  //  videoUrl = 'https://www.youtube.com/watch?v=iyOESsENvaI';

  apiLoaded = false;

  videoId = 'iyOESsENvaI';

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
