import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Page} from '../../models/page';
import {Route} from '../../constants/route.constants';
import {PageProperty} from '../../models/PageProperty';
import {PageUuidService} from '../../services/page.uuid.service';
import {Subscription} from 'rxjs';
import {CardProperty} from '../../models/CardProperty';
import {CardService} from '../../services/card.service';
import {Card} from '../../models/card';

@Component({
  selector: 'app-experience',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit, OnDestroy{
  private sub = new Subscription();

  constructor(
    private router: Router,
    private pageService: PageService,
    private pageUuidService: PageUuidService,
    private cardService: CardService
  ) {
  }

  // tslint:disable-next-line:typedef
  public getPage(){
    return 'tips';
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
  ngOnInit(): void{
    console.log(this.pageUuidService.getDeviceId());
    console.log(this.getPage());
    this.savePage({
      [PageProperty.uuid]: this.pageUuidService.getDeviceId(),
      [PageProperty.page]: this.getPage(),
      [PageProperty.enterexit]: this.getEnter()
    });
  }

  savePage(page: Page): void {
    this.pageService.create(page).subscribe(() => {
      this.router.navigate([Route.TIPS]);
    });
  }
  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  // tslint:disable-next-line:typedef
  public getTip1(){
    return 'tip 1';
  }
  // tslint:disable-next-line:typedef
  public getTip2(){
    return 'tip 2';
  }
  // tslint:disable-next-line:typedef
  public getTip3(){
    return 'tip 3';
  }
  // tslint:disable-next-line:typedef
  public getTip4(){
    return 'tip 4';
  }
  // tslint:disable-next-line:typedef
  public getTip5(){
    return 'tip 5';
  }
  // tslint:disable-next-line:typedef
  public getTip6(){
    return 'tip 6';
  }
  // tslint:disable-next-line:typedef
  public getTip7(){
    return 'tip 7';
  }
  // tslint:disable-next-line:typedef
  public getTip8(){
    return 'tip 8';
  }
  // tslint:disable-next-line:typedef
  tip1(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip1(),
      [CardProperty.enterexit]: this.getEnter()
    });
  }
  // tslint:disable-next-line:typedef
  tip1exit(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip1(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
  // tslint:disable-next-line:typedef
  tip2(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip2(),
      [CardProperty.enterexit]: this.getEnter()
    });
  }
  // tslint:disable-next-line:typedef
  tip2exit(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip2(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
  // tslint:disable-next-line:typedef
  tip3(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip3(),
      [CardProperty.enterexit]: this.getEnter()
    });
  }
  // tslint:disable-next-line:typedef
  tip3exit(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip3(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
  // tslint:disable-next-line:typedef
  tip4(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip4(),
      [CardProperty.enterexit]: this.getEnter()
    });
  }
  // tslint:disable-next-line:typedef
  tip4exit(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip4(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
  // tslint:disable-next-line:typedef
  tip5(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip5(),
      [CardProperty.enterexit]: this.getEnter()
    });
  }
  // tslint:disable-next-line:typedef
  tip5exit(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip5(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
  // tslint:disable-next-line:typedef
  tip6(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip6(),
      [CardProperty.enterexit]: this.getEnter()
    });
  }
  // tslint:disable-next-line:typedef
  tip6exit(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip6(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
  // tslint:disable-next-line:typedef
  tip7(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip7(),
      [CardProperty.enterexit]: this.getEnter()
    });
  }
  // tslint:disable-next-line:typedef
  tip7exit(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip7(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
  // tslint:disable-next-line:typedef
  tip8(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip8(),
      [CardProperty.enterexit]: this.getEnter()
    });
  }
  // tslint:disable-next-line:typedef
  tip8exit(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getTip8(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
  saveCard(card: Card): void {
    this.cardService.create(card).subscribe(() => {
      this.router.navigate([Route.TIPS]);
      console.log(444);
    });
  }
}
