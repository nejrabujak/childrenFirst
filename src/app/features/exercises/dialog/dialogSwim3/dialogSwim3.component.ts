import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CardService} from '../../../../services/card.service';
import {Route} from '../../../../constants/route.constants';
import {PageName} from '../../../../models/page-name.enum';
import {CardName} from '../../../../models/card-name.enum';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogSwim3.component.html',
  styleUrls: ['./dialogSwim3.component.css']
})
export class DialogSwim3Component implements OnInit {

  constructor(
    private router: Router,
    private cardService: CardService
  ) { }

  //  videoUrl = 'https://www.youtube.com/watch?v=Q0y4Rd64j80';
  apiLoaded = false;
  videoId = 'Q0y4Rd64j80';

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
    this.cardService.exit(PageName.exercises, CardName.swim3).subscribe(() => {
      this.navigateExercises();
    });
  }

  private enterDialog(): void {
    this.cardService.enter(PageName.exercises, CardName.swim3).subscribe(() => {
      this.navigateExercises();
    });
  }

  private navigateExercises(): void {
    this.router.navigate([Route.EXERCISES]);
  }
}
