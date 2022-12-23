import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Route} from '../../constants/route.constants';
import {CardService} from '../../services/card.service';
import {PageName} from '../../models/page-name.enum';
import {CardName} from '../../models/card-name.enum';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit{

  constructor(
    private router: Router,
    private pageService: PageService,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.enterPage();
  }

  swim(): void{
    this.cardService.enter(PageName.sport, CardName.swim).subscribe(() => {
      this.navigateSport();
    });
  }

  swimExit(): void {
    this.cardService.exit(PageName.sport, CardName.swim).subscribe(() => {
      this.navigateSport();
    });
  }

  skiing(): void {
    this.cardService.enter(PageName.sport, CardName.skiing).subscribe(() => {
      this.navigateSport();
    });
  }

  skiingExit(): void {
    this.cardService.exit(PageName.sport, CardName.skiing).subscribe(() => {
      this.navigateSport();
    });
  }

  football(): void {
    this.cardService.enter(PageName.sport, CardName.football).subscribe(() => {
      this.navigateSport();
    });
  }

  footballExit(): void {
    this.cardService.exit(PageName.sport, CardName.football).subscribe(() => {
      this.navigateSport();
    });
  }

  athletics(): void {
    this.cardService.enter(PageName.sport, CardName.athletics).subscribe(() => {
      this.navigateSport();
    });
  }

  athleticsExit(): void {
    this.cardService.exit(PageName.sport, CardName.athletics).subscribe(() => {
      this.navigateSport();
    });
  }

  gymnastics(): void {
    this.cardService.enter(PageName.sport, CardName.gymnastics).subscribe(() => {
      this.navigateSport();
    });
  }

  gymnasticsExit(): void {
    this.cardService.exit(PageName.sport, CardName.gymnastics).subscribe(() => {
      this.navigateSport();
    });
  }

  volleyball(): void {
    this.cardService.enter(PageName.sport, CardName.volleyball).subscribe(() => {
      this.navigateSport();
    });
  }

  volleyballExit(): void {
    this.cardService.exit(PageName.sport, CardName.volleyball).subscribe(() => {
      this.navigateSport();
    });
  }

  private enterPage(): void {
    this.pageService.enter(PageName.sport).subscribe(() => {
      this.navigateSport();
    });
  }

  private navigateSport(): void {
    this.router.navigate([Route.SPORT]);
  }
}
