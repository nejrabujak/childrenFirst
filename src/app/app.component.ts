import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {PageUuidService} from './services/page.uuid.service';
import {Router} from '@angular/router';
import {PageService} from './services/page.service';
import {PageProperty} from './models/PageProperty';
import {Page} from './models/page';
import {Route} from './constants/route.constants';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  // title="childrenFirst";
  private sub = new Subscription();

  constructor(
    private router: Router,
    private pageService: PageService,
    private pageUuidService: PageUuidService
  ) {
  }

  @HostListener('window:beforeunload', [ '$event' ])
  // tslint:disable-next-line:typedef
  beforeUnloadHandler(event) {
    this.savePage({
      [PageProperty.uuid]: this.pageUuidService.getDeviceId(),
      [PageProperty.page]: this.getExit(),
      [PageProperty.enterexit]: this.getExit()
    });
  }
  // tslint:disable-next-line:typedef
  public getPage(){
    return 'enter application';
  }
  // tslint:disable-next-line:typedef
  public getEnter(){
    return 'enter';
  }
  // tslint:disable-next-line:typedef
  public getExit(){
    return 'exit application';
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
      this.router.navigate([Route.EMPTY]);
    });
  }

  public ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}
