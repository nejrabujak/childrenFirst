import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CardService} from '../../../../services/card.service';
import {CardName} from '../../../../models/card-name.enum';
import {BaseDialogComponent} from '../base-dialog/base-dialog.component';

@Component({
  selector: 'app-dialog-swim2',
  templateUrl: './dialog-swim2.component.html',
  styleUrls: ['./dialog-swim2.component.css']
})
export class DialogSwim2Component extends BaseDialogComponent implements OnInit {

  constructor(
    router: Router,
    cardService: CardService
  ) {
    super(router, cardService, CardName.swim2);
  }

  //  videoUrl = 'https://www.youtube.com/watch?v=9jFiuZqtNyk';
  apiLoaded = false;
  videoId = '9jFiuZqtNyk';

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
