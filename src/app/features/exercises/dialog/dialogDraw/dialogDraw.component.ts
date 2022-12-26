import {Component} from '@angular/core';
import {CardService} from '../../../../services/card.service';
import {Router} from '@angular/router';
import {CardName} from '../../../../models/card-name.enum';
import {BaseDialogComponent} from '../base-dialog/base-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogDraw.component.html',
  styleUrls: ['./dialogDraw.component.css']
})
export class DialogDrawComponent extends BaseDialogComponent {

  constructor(
    router: Router,
    cardService: CardService
  ) {
    super(router, cardService, CardName.draw);
  }

}
