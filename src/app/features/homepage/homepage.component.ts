import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Page} from '../../models/page.model';
import {Route} from '../../constants/route.constants';
import {PageProperty} from '../../models/page-property.enum';
import {PageUuidService} from '../../services/page.uuid.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy{
  private sub = new Subscription();

  constructor(
    private router: Router,
    private pageService: PageService,
    private pageUuidService: PageUuidService
  ) {
  }

  // tslint:disable-next-line:typedef
  public getPage(){
    return 'homepage';
  }
  // tslint:disable-next-line:typedef
  public getEnter(){
    return 'enter';
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
    this.sub = new Subscription();
  }

  savePage(page: Page): void {
    this.pageService.enter(page).subscribe(() => {
      this.router.navigate([Route.EMPTY]);
    });
  }
  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}

