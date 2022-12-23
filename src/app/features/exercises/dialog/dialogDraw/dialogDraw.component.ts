import {Component, OnInit} from '@angular/core';
import {CardService} from '../../../../services/card.service';
import {Router} from '@angular/router';
import {Route} from '../../../../constants/route.constants';
import {PageName} from '../../../../models/page-name.enum';
import {CardName} from '../../../../models/card-name.enum';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogDraw.component.html',
  styleUrls: ['./dialogDraw.component.css']
})
export class DialogDrawComponent implements OnInit {

  constructor(
    private router: Router,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.enterDialog();
  }

  exit(): void {
    this.cardService.exit(PageName.exercises, CardName.draw).subscribe(() => {
      this.navigateExercises();
    });
  }

  private enterDialog(): void {
    this.cardService.enter(PageName.exercises, CardName.draw).subscribe(() => {
      this.navigateExercises();
    });
  }

  private navigateExercises(): void {
    this.router.navigate([Route.EXERCISES]);
  }
}
