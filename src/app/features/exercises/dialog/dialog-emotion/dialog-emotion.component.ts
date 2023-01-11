import {Component} from '@angular/core';
import {CardService} from '../../../../services/card.service';
import {Router} from '@angular/router';
import {CardName} from '../../../../models/card-name.enum';
import {BaseDialogComponent} from '../base-dialog/base-dialog.component';

@Component({
  selector: 'app-dialog-emotion',
  templateUrl: './dialog-emotion.component.html',
  styleUrls: ['./dialog-emotion.component.css']
})
export class DialogEmotionComponent extends BaseDialogComponent{

  constructor(
    router: Router,
    cardService: CardService
  ) {
    super(router, cardService, CardName.emotion);
  }
}
