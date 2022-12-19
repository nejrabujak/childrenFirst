import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../../services/page.service';
import {PageUuidService} from '../../../services/page.uuid.service';
import {PageProperty} from '../../../models/page-property.enum';
import {Page} from '../../../models/page.model';
import {Route} from '../../../constants/route.constants';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy{
  private sub = new Subscription();

  constructor(
    private router: Router,
    private pageService: PageService,
    private pageUuidService: PageUuidService
  ) {
  }

  // tslint:disable-next-line:typedef
  public getPage(){
    return 'about me';
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
  }

  savePage(page: Page): void {
    this.pageService.enter(page).subscribe(() => {
      this.router.navigate([Route.ABOUT]);
    });
  }
  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}
