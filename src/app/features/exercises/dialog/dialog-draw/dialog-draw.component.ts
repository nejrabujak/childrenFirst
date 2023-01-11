import {Component} from '@angular/core';
import {CardService} from '../../../../services/card.service';
import {Router} from '@angular/router';
import {CardName} from '../../../../models/card-name.enum';
import {BaseDialogComponent} from '../base-dialog/base-dialog.component';

@Component({
  selector: 'app-dialog-draw',
  templateUrl: './dialog-draw.component.html',
  styleUrls: ['./dialog-draw.component.css']
})
export class DialogDrawComponent extends BaseDialogComponent {

  constructor(
    router: Router,
    cardService: CardService
  ) {
    super(router, cardService, CardName.draw);
  }
}
