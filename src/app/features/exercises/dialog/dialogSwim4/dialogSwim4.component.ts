import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CardService} from '../../../../services/card.service';
import {Route} from '../../../../constants/route.constants';
import {PageName} from '../../../../models/page-name.enum';
import {CardName} from '../../../../models/card-name.enum';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogSwim4.component.html',
  styleUrls: ['./dialogSwim4.component.css']
})
export class DialogSwim4Component implements OnInit {

  constructor(
    private router: Router,
    private cardService: CardService
  ) { }

  //  videoUrl = 'https://www.youtube.com/watch?v=iyOESsENvaI';
  apiLoaded = false;
  videoId = 'iyOESsENvaI';

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
    this.cardService.exit(PageName.exercises, CardName.swim4).subscribe(() => {
      this.navigateExercises();
    });
  }

  private enterDialog(): void {
    this.cardService.enter(PageName.exercises, CardName.swim4).subscribe(() => {
      this.navigateExercises();
    });
  }

  private navigateExercises(): void {
    this.router.navigate([Route.EXERCISES]);
  }

}
