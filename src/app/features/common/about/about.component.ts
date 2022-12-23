import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../../services/page.service';
import {PageName} from '../../../models/page-name.enum';
import {Route} from '../../../constants/route.constants';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  constructor(
    private router: Router,
    private pageService: PageService,
  ) { }

  ngOnInit(): void {
    this.enterPage();
  }

  private enterPage(): void {
    this.pageService.enter(PageName.about).subscribe(() => {
      this.navigateAbout();
    });
  }

  private navigateAbout(): void {
    this.router.navigate([Route.ABOUT]);
  }
}
