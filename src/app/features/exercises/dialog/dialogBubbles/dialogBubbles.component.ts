import {Component, HostListener, OnInit} from '@angular/core';
import {CardService} from '../../../../services/card.service';
import {PageUuidService} from '../../../../services/page.uuid.service';
import {Router} from '@angular/router';
import {CardProperty} from '../../../../models/CardProperty';
import {Card} from '../../../../models/card';
import {Route} from '../../../../constants/route.constants';
import {PageService} from '../../../../services/page.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogBubbles.component.html',
  styleUrls: ['./dialogBubbles.component.css']
})
export class DialogBubblesComponent implements OnInit {

  constructor(
    private router: Router,
    private pageService: PageService,
    private pageUuidService: PageUuidService,
    private cardService: CardService
  ) {
  }
  //  videoUrl = 'https://www.youtube.com/watch?v=ylnZry9fpKY';

  apiLoaded = false;

  videoId = 'ylnZry9fpKY';

  // tslint:disable-next-line:typedef
  public getPage(){
    return 'exercises';
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
  public getBubble(){
    return 'bubble';
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
      [CardProperty.card]: this.getBubble(),
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
      [CardProperty.card]: this.getBubble(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
}
