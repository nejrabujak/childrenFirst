import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogDrawComponent} from './dialog/dialog-draw/dialog-draw.component';
import {DialogEmotionComponent} from './dialog/dialog-emotion/dialog-emotion.component';
import {DialogMemoryComponent} from './dialog/dialog-memory/dialog-memory.component';
import {DialogToysComponent} from './dialog/dialog-toys/dialog-toys.component';
import {DialogBubblesComponent} from './dialog/dialog-bubbles/dialog-bubbles.component';
import {DialogSwim1Component} from './dialog/dialog-swim1/dialog-swim1.component';
import {DialogSwim2Component} from './dialog/dialog-swim2/dialog-swim2.component';
import {DialogSwim3Component} from './dialog/dialog-swim3/dialog-swim3.component';
import {DialogSwim4Component} from './dialog/dialog-swim4/dialog-swim4.component';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Route} from '../../constants/route.constants';
import {PageName} from '../../models/page-name.enum';
import {BaseComponent} from '../common/base/base.component';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent extends BaseComponent{

  public dialogBubblesComponent = DialogBubblesComponent;
  public dialogDrawComponent = DialogDrawComponent;
  public dialogEmotionComponent = DialogEmotionComponent;
  public dialogMemoryComponent = DialogMemoryComponent;
  public dialogSwim1Component = DialogSwim1Component;
  public dialogSwim2Component = DialogSwim2Component;
  public dialogSwim3Component = DialogSwim3Component;
  public dialogSwim4Component = DialogSwim4Component;
  public dialogToysComponent = DialogToysComponent;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private pageService: PageService,
  ) {
    super();
  }

  showDialog(dialog: any): void {
    const dialogRef = this.dialog.open(dialog, {
      width: '800px',
      height: '500px'
    });
    this.setTime(dialogRef);
  }

  protected enterPage(): void {
    this.pageService.enter(PageName.exercises).subscribe(() => {
      this.navigatePage();
    });
  }

  protected navigatePage(): void {
    this.router.navigate([Route.EXERCISES]);
  }

  private setTime(dialogRef): void{
    setTimeout(() => {
      dialogRef.close();
    }, 10000000000);
  }
}
