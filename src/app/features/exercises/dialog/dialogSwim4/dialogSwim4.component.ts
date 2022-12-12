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
  templateUrl: './dialogSwim4.component.html',
  styleUrls: ['./dialogSwim4.component.css']
})
export class DialogSwim4Component implements OnInit {

  constructor(
    private router: Router,
    private pageService: PageService,
    private pageUuidService: PageUuidService,
    private cardService: CardService
  ) { }

  //  videoUrl = 'https://www.youtube.com/watch?v=iyOESsENvaI';

  apiLoaded = false;

  videoId = 'iyOESsENvaI';
  // tslint:disable-next-line:typedef
  public getPage(){
    return 'exercises';
  }
  // tslint:disable-next-line:typedef
  public getSwim4(){
    return 'swim 4';
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
      [CardProperty.card]: this.getSwim4(),
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
      [CardProperty.card]: this.getSwim4(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
}
