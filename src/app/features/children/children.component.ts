import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Route} from '../../constants/route.constants';
import {PageName} from '../../models/page-name.enum';


@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit{

  constructor(
    private router: Router,
    private pageService: PageService,
  ) {
  }

  ngOnInit(): void{
    this.enterPage();
  }

  private enterPage(): void {
    this.pageService.enter(PageName.children).subscribe(() => {
      this.navigateChildren();
    });
  }
  private navigateChildren(): void {
    this.router.navigate([Route.CHILDREN]);
  }
}
