import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../../services/page.service';
import {PageName} from '../../../models/page-name.enum';
import {Route} from '../../../constants/route.constants';
import {BaseComponent} from '../base/base.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends BaseComponent {

  constructor(
    private router: Router,
    private pageService: PageService,
  ) {
    super();
  }

  protected enterPage(): void {
    this.pageService.enter(PageName.about).subscribe(() => {
      this.navigatePage();
    });
  }

  protected navigatePage(): void {
    this.router.navigate([Route.ABOUT]);
  }
}
