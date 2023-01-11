import {Component} from '@angular/core';
import {CardService} from '../../../../services/card.service';
import {Router} from '@angular/router';
import {CardName} from '../../../../models/card-name.enum';
import {BaseDialogComponent} from '../base-dialog/base-dialog.component';

@Component({
  selector: 'app-dialog-memory',
  templateUrl: './dialog-memory.component.html',
  styleUrls: ['./dialog-memory.component.css']
})
export class DialogMemoryComponent extends BaseDialogComponent {

  constructor(
    router: Router,
    cardService: CardService
  ) {
    super(router, cardService, CardName.memory);
  }
}
