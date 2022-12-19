import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from './services/page.service';
import {Route} from './constants/route.constants';
import {PageName} from './models/page-name.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private pageService: PageService,
  ) {
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event): void {
    this.exitPage();
  }

  ngOnInit(): void {
    this.enterPage();
  }

  private enterPage(): void {
    this.pageService.enter(PageName.enterApplication).subscribe(() => {
      this.navigateHome();
    });
  }

  private exitPage(): void {
    this.pageService.exit(PageName.exitApplication).subscribe(() => {
      this.navigateHome();
    });
  }

  private navigateHome(): void {
    this.router.navigate([Route.EMPTY]);
  }

}
