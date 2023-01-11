import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Route} from '../../constants/route.constants';
import {CardService} from '../../services/card.service';
import {PageName} from '../../models/page-name.enum';
import {CardName} from '../../models/card-name.enum';
import {BaseComponent} from '../common/base/base.component';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent extends BaseComponent{

  public cardName = CardName;

  constructor(
    private router: Router,
    private pageService: PageService,
    private cardService: CardService
  ) {
    super();
  }

  sportEnter(cardName: CardName): void {
    this.cardService.enter(PageName.sport, cardName).subscribe(() => {
      this.navigatePage();
    });
  }

  sportExit(cardName: CardName): void {
    this.cardService.exit(PageName.sport, cardName).subscribe(() => {
      this.navigatePage();
    });
  }

  protected enterPage(): void {
    this.pageService.enter(PageName.sport).subscribe(() => {
      this.navigatePage();
    });
  }

  protected navigatePage(): void {
    this.router.navigate([Route.SPORT]);
  }
}
