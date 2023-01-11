import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Route} from '../../constants/route.constants';
import {PageName} from '../../models/page-name.enum';
import {BaseComponent} from '../common/base/base.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent extends BaseComponent{

  constructor(
    private router: Router,
    private pageService: PageService,
  ) {
    super();
  }

  protected enterPage(): void {
    this.pageService.enter(PageName.homepage).subscribe(() => {
      this.navigatePage();
    });
  }

  protected navigatePage(): void {
    this.router.navigate([Route.EMPTY]);
  }
}
