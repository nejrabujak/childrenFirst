import {OnInit} from '@angular/core';
import {CardService} from '../../../../services/card.service';
import {Router} from '@angular/router';
import {Route} from '../../../../constants/route.constants';
import {PageName} from '../../../../models/page-name.enum';
import {CardName} from '../../../../models/card-name.enum';

export abstract class BaseDialogComponent implements OnInit {

  protected constructor(
    private router: Router,
    private cardService: CardService,
    private cardName: CardName,
  ) {
  }

  ngOnInit(): void {
    this.enterDialog();
  }

  public exit(): void {
    this.cardService.exit(PageName.exercises, this.cardName).subscribe(() => {
      this.navigateExercises();
    });
  }

  private enterDialog(): void {
    this.cardService.enter(PageName.exercises, this.cardName).subscribe(() => {
      this.navigateExercises();
    });
  }

  private navigateExercises(): void {
    this.router.navigate([Route.EXERCISES]);
  }
}
