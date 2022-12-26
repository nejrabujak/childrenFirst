import {Component, OnInit} from '@angular/core';
import {CardService} from '../../../../services/card.service';
import {Router} from '@angular/router';
import {Route} from '../../../../constants/route.constants';
import {PageName} from '../../../../models/page-name.enum';
import {CardName} from '../../../../models/card-name.enum';

@Component({
  selector: 'app-dialog', // todo: in this and in other dialog components, rename selectors
  templateUrl: './dialog-bubbles.component.html',
  styleUrls: ['./dialog-bubbles.component.css']
})
// todo: as this class filename was renamed, please rename also other dialog components
export class DialogBubblesComponent implements OnInit {

  constructor(
    private router: Router,
    private cardService: CardService
  ) { }

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

  exit(): void {
    this.cardService.exit(PageName.exercises, CardName.bubble).subscribe(() => {
      this.navigateExercises();
    });
  }

  private enterDialog(): void {
    this.cardService.enter(PageName.exercises, CardName.bubble).subscribe(() => {
      this.navigateExercises();
    });
  }

  private navigateExercises(): void {
    this.router.navigate([Route.EXERCISES]);
  }
}
