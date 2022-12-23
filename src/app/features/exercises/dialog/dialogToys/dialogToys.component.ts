import {Component, OnInit} from '@angular/core';
import {CardService} from '../../../../services/card.service';
import {Router} from '@angular/router';
import {Route} from '../../../../constants/route.constants';
import {PageName} from '../../../../models/page-name.enum';
import {CardName} from '../../../../models/card-name.enum';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogToys.component.html',
  styleUrls: ['./dialogToys.component.css']
})
export class DialogToysComponent implements OnInit {

  constructor(
    private router: Router,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.enterDialog();
  }

  exit(): void {
    this.cardService.exit(PageName.exercises, CardName.toys).subscribe(() => {
      this.navigateExercises();
    });
  }

  private enterDialog(): void {
    this.cardService.enter(PageName.exercises, CardName.toys).subscribe(() => {
      this.navigateExercises();
    });
  }

  private navigateExercises(): void {
    this.router.navigate([Route.EXERCISES]);
  }
}
