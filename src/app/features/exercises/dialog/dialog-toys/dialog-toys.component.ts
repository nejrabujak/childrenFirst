import {Component} from '@angular/core';
import {CardService} from '../../../../services/card.service';
import {Router} from '@angular/router';
import {CardName} from '../../../../models/card-name.enum';
import {BaseDialogComponent} from '../base-dialog/base-dialog.component';

@Component({
  selector: 'app-dialog-toys',
  templateUrl: './dialog-toys.component.html',
  styleUrls: ['./dialog-toys.component.css']
})
export class DialogToysComponent extends BaseDialogComponent {

  constructor(
    router: Router,
    cardService: CardService
  ) {
    super(router, cardService, CardName.toys);
  }
}
