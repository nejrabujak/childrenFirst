import { Component, OnInit } from '@angular/core';
import {CardProperty} from '../../../../models/CardProperty';
import {Card} from '../../../../models/card';
import {CardService} from '../../../../services/card.service';
import {PageUuidService} from '../../../../services/page.uuid.service';
import {Router} from '@angular/router';
import {PageService} from '../../../../services/page.service';
import {Route} from '../../../../constants/route.constants';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialogDraw.component.html',
  styleUrls: ['./dialogDraw.component.css']
})
export class DialogDrawComponent implements OnInit {

  constructor(
    private router: Router,
    private pageService: PageService,
    private pageUuidService: PageUuidService,
    private cardService: CardService
  ) {
  }
  // tslint:disable-next-line:typedef
  public getPage(){
    return 'exercises';
  }
  // tslint:disable-next-line:typedef
  public getDraw(){
    return 'draw';
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
    this.saveCard({
      [CardProperty.uuid]: this.pageUuidService.getDeviceId(),
      [CardProperty.page]: this.getPage(),
      [CardProperty.card]: this.getDraw(),
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
      [CardProperty.card]: this.getDraw(),
      [CardProperty.enterexit]: this.getExit()
    });
  }
}
