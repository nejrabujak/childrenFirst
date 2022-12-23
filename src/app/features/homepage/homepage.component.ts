import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Route} from '../../constants/route.constants';
import {PageName} from '../../models/page-name.enum';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  constructor(
    private router: Router,
    private pageService: PageService,
  ) { }

  ngOnInit(): void {
    this.enterPage();
  }
  private enterPage(): void {
    this.pageService.enter(PageName.homepage).subscribe(() => {
      this.navigateHome();
    });
  }

  private navigateHome(): void {
    this.router.navigate([Route.EMPTY]);
  }
}
