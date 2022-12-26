import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Route} from '../../constants/route.constants';
import {CardService} from '../../services/card.service';
import {PageName} from '../../models/page-name.enum';
import {CardName} from '../../models/card-name.enum';

@Component({
  selector: 'app-experience',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit{

  public cardName = CardName;

  constructor(
    private router: Router,
    private pageService: PageService,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.enterPage();
  }

  tipEnter(cardName: CardName): void {
    this.cardService.enter(PageName.tips, cardName).subscribe(() => {
      this.navigateTips();
    });
  }

  tipExit(cardName: CardName): void {
    this.cardService.exit(PageName.tips, cardName).subscribe(() => {
      this.navigateTips();
    });
  }

  tip2(): void {
    this.cardService.enter(PageName.tips, CardName.tip2).subscribe(() => {
      this.navigateTips();
    });
  }

  tip2exit(): void {
    this.cardService.exit(PageName.tips, CardName.tip2).subscribe(() => {
      this.navigateTips();
    });
  }

  tip3(): void {
    this.cardService.enter(PageName.tips, CardName.tip3).subscribe(() => {
      this.navigateTips();
    });
  }

  tip3exit(): void {
    this.cardService.exit(PageName.tips, CardName.tip3).subscribe(() => {
      this.navigateTips();
    });
  }

  tip4(): void {
    this.cardService.enter(PageName.tips, CardName.tip4).subscribe(() => {
      this.navigateTips();
    });
  }

  tip4exit(): void {
    this.cardService.exit(PageName.tips, CardName.tip4).subscribe(() => {
      this.navigateTips();
    });
  }

  tip5(): void {
    this.cardService.enter(PageName.tips, CardName.tip5).subscribe(() => {
      this.navigateTips();
    });
  }

  tip5exit(): void {
    this.cardService.exit(PageName.tips, CardName.tip5).subscribe(() => {
      this.navigateTips();
    });
  }

  tip6(): void {
    this.cardService.enter(PageName.tips, CardName.tip6).subscribe(() => {
      this.navigateTips();
    });
  }

  tip6exit(): void {
    this.cardService.exit(PageName.tips, CardName.tip6).subscribe(() => {
      this.navigateTips();
    });
  }

  tip7(): void {
    this.cardService.enter(PageName.tips, CardName.tip7).subscribe(() => {
      this.navigateTips();
    });
  }

  tip7exit(): void {
    this.cardService.exit(PageName.tips, CardName.tip7).subscribe(() => {
      this.navigateTips();
    });
  }

  tip8(): void {
    this.cardService.enter(PageName.tips, CardName.tip8).subscribe(() => {
      this.navigateTips();
    });
  }

  tip8exit(): void {
    this.cardService.exit(PageName.tips, CardName.tip8).subscribe(() => {
      this.navigateTips();
    });
  }

  private enterPage(): void {
    this.pageService.enter(PageName.tips).subscribe(() => {
      this.navigateTips();
    });
  }

  private navigateTips(): void {
    this.router.navigate([Route.TIPS]);
  }
}
