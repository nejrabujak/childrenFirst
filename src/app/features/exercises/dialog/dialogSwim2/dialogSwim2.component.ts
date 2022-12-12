import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../../../services/page.service';
import {PageUuidService} from '../../../../services/page.uuid.service';
import {CardService} from '../../../../services/card.service';
import {CardProperty} from '../../../../models/CardProperty';
import {Card} from '../../../../models/card';
import {Route} from '../../../../constants/route.constants';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogSwim2.component.html',
  styleUrls: ['./dialogSwim2.component.css']
})
export class DialogSwim2Component implements OnInit {

  constructor(
    private router: Router,
    private pageService: PageService,
    private pageUuidService: PageUuidService,
    private cardService: CardService
  ) { }

  //  videoUrl = 'https://www.youtube.com/watch?v=9jFiuZqtNyk';

  apiLoaded = false;

  videoId = '9jFiuZqtNyk';
  // tslint:disable-next-line:typedef
  public getPage(){
    return 'exercises';
  }
  // tslint:disable-next-line:typedef
  public getSwim2(){
    return 'swim 2';
  }
// tslint:disable-next-line:typedef
  public getEnter(){
    return 'enter';
  }
  // tslint:disable-next-line:typedef
  public getExit(){
    return 'exit';
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getSwim2(),
      [CardProperty.enterexit]: this.getEnter()
    });
  }
  saveCard(card: Card): void {
    this.cardService.create(card).subscribe(() => {
      this.router.navigate([Route.EXERCISES]);
      console.log(444);
    });
  }
// tslint:disable-next-line:typedef
  exit(){
    console.log('exit');
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getSwim2(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
}
