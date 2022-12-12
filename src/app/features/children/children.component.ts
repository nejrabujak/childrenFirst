import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {PageUuidService} from '../../services/page.uuid.service';
import {PageProperty} from '../../models/PageProperty';
import {Page} from '../../models/page';
import {Route} from '../../constants/route.constants';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit, OnDestroy{
  private sub = new Subscription();

  constructor(
    private router: Router,
    private pageService: PageService,
    private pageUuidService: PageUuidService
  ) {
  }

  // tslint:disable-next-line:typedef
  public getPage(){
    return 'about children';
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
    this.pageService.create(page).subscribe(() => {
      this.router.navigate([Route.CHILDREN]);
    });
  }
  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}
