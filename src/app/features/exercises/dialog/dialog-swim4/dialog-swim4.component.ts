import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CardService} from '../../../../services/card.service';
import {CardName} from '../../../../models/card-name.enum';
import {BaseDialogComponent} from '../base-dialog/base-dialog.component';

@Component({
  selector: 'app-dialog-swim4',
  templateUrl: './dialog-swim4.component.html',
  styleUrls: ['./dialog-swim4.component.css']
})
export class DialogSwim4Component extends BaseDialogComponent implements OnInit {

  constructor(
    router: Router,
    cardService: CardService
  ) {
    super(router, cardService, CardName.swim1);
  }

  //  videoUrl = 'https://www.youtube.com/watch?v=iyOESsENvaI';
  apiLoaded = false;
  videoId = 'iyOESsENvaI';

  ngOnInit(): void {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
    this.enterDialog();
  }
}
