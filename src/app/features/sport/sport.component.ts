import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Page} from '../../models/page';
import {Route} from '../../constants/route.constants';
import {PageProperty} from '../../models/PageProperty';
import {PageUuidService} from '../../services/page.uuid.service';
import {Subscription} from 'rxjs';
import {Card} from '../../models/card';
import {CardProperty} from '../../models/CardProperty';
import {CardService} from '../../services/card.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit, OnDestroy{

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
    return 'sport';
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
    console.log(this.getEnter());
    this.savePage({
      [PageProperty.uuid]: this.pageUuidService.getDeviceId(),
      [PageProperty.page]: this.getPage(),
      [PageProperty.enterexit]: this.getEnter()
    });
  }

  savePage(page: Page): void {
    this.pageService.create(page).subscribe(() => {
      this.router.navigate([Route.SPORT]);
    });
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  // tslint:disable-next-line:typedef
  public getSwim(){
    return 'swim';
  }
  // tslint:disable-next-line:typedef
  public getSkiing(){
    return 'skiing';
  }
  // tslint:disable-next-line:typedef
  public getAthletics(){
    return 'athletics';
  }
  // tslint:disable-next-line:typedef
  public getFootball(){
    return 'football';
  }
  // tslint:disable-next-line:typedef
  public getGymnastics(){
    return 'gymnastics';
  }
  // tslint:disable-next-line:typedef
  public getVolleyball(){
    return 'volleyball';
  }
  // tslint:disable-next-line:typedef
  swim(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getSwim(),
      [CardProperty.enterexit]: this.getEnter()
    });
  }
  // tslint:disable-next-line:typedef
  swimExit(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getSwim(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
  // tslint:disable-next-line:typedef
  skiing(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getSkiing(),
      [CardProperty.enterexit]: this.getEnter()
    });
  }
  // tslint:disable-next-line:typedef
  skiingExit(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getSkiing(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
  // tslint:disable-next-line:typedef
  football(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getFootball(),
      [CardProperty.enterexit]: this.getEnter()
    });
  }
  // tslint:disable-next-line:typedef
  footballExit(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getFootball(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
  // tslint:disable-next-line:typedef
  athletics(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getAthletics(),
      [CardProperty.enterexit]: this.getEnter()
    });
  }
  // tslint:disable-next-line:typedef
  athleticsExit(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getAthletics(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
  // tslint:disable-next-line:typedef
  gymnastics(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getGymnastics(),
      [CardProperty.enterexit]: this.getEnter()
    });
  }
  // tslint:disable-next-line:typedef
  gymnasticsExit(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getGymnastics(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
  // tslint:disable-next-line:typedef
  volleyball(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getVolleyball(),
      [CardProperty.enterexit]: this.getEnter()
    });
  }
  // tslint:disable-next-line:typedef
  volleyballExit(){
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getVolleyball(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
  saveCard(card: Card): void {
    this.cardService.create(card).subscribe(() => {
      this.router.navigate([Route.SPORT]);
      console.log(444);
    });
  }
}
