import {Component, OnInit} from '@angular/core';
import {CardService} from '../../../../services/card.service';
import {Router} from '@angular/router';
import {CardName} from '../../../../models/card-name.enum';
import {BaseDialogComponent} from '../base-dialog/base-dialog.component';

@Component({
  selector: 'app-dialog-bubble',
  templateUrl: './dialog-bubbles.component.html',
  styleUrls: ['./dialog-bubbles.component.css']
})
export class DialogBubblesComponent extends BaseDialogComponent implements OnInit {

  constructor(
    router: Router,
    cardService: CardService
  ) {
    super(router, cardService, CardName.bubble);
  }

  //  videoUrl = 'https://www.youtube.com/watch?v=ylnZry9fpKY';
  apiLoaded = false;
  videoId = 'ylnZry9fpKY';

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
