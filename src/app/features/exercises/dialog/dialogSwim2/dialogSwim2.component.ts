import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogSwim2.component.html',
  styleUrls: ['./dialogSwim2.component.css']
})
export class DialogSwim2Component implements OnInit {

  constructor() { }

  //  videoUrl = 'https://www.youtube.com/watch?v=9jFiuZqtNyk';

  apiLoaded = false;

  videoId = '9jFiuZqtNyk';

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
