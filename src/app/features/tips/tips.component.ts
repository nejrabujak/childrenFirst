import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Route} from '../../constants/route.constants';
import {CardService} from '../../services/card.service';
import {PageName} from '../../models/page-name.enum';
import {CardName} from '../../models/card-name.enum';
import {BaseComponent} from '../common/base/base.component';

@Component({
  selector: 'app-experience',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent extends BaseComponent{

  public cardName = CardName;

  constructor(
    private router: Router,
    private pageService: PageService,
    private cardService: CardService
  ) {
    super();
  }

  tipEnter(cardName: CardName): void {
    this.cardService.enter(PageName.tips, cardName).subscribe(() => {
      this.navigatePage();
    });
  }

  tipExit(cardName: CardName): void {
    this.cardService.exit(PageName.tips, cardName).subscribe(() => {
      this.navigatePage();
    });
  }

  protected enterPage(): void {
    this.pageService.enter(PageName.tips).subscribe(() => {
      this.navigatePage();
    });
  }

  protected navigatePage(): void {
    this.router.navigate([Route.TIPS]);
  }
}
