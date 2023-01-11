import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CardService} from '../../../../services/card.service';
import {CardName} from '../../../../models/card-name.enum';
import {BaseDialogComponent} from '../base-dialog/base-dialog.component';

@Component({
  selector: 'app-dialog-swim3',
  templateUrl: './dialog-swim3.component.html',
  styleUrls: ['./dialog-swim3.component.css']
})
export class DialogSwim3Component extends BaseDialogComponent implements OnInit {

  constructor(
    router: Router,
    cardService: CardService
  ) {
    super(router, cardService, CardName.swim3);
  }

  //  videoUrl = 'https://www.youtube.com/watch?v=Q0y4Rd64j80';
  apiLoaded = false;
  videoId = 'Q0y4Rd64j80';

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
