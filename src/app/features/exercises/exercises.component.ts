import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogDrawComponent} from './dialog/dialogDraw/dialogDraw.component';
import {DialogEmotionComponent} from './dialog/dialogEmotion/dialogEmotion.component';
import {DialogMemoryComponent} from './dialog/dialogMemory/dialogMemory.component';
import {DialogToysComponent} from './dialog/dialogToys/dialogToys.component';
import {DialogBubblesComponent} from './dialog/dialogBubbles/dialogBubbles.component';
import {DialogSwim1Component} from './dialog/dialogSwim1/dialogSwim1.component';
import {DialogSwim2Component} from './dialog/dialogSwim2/dialogSwim2.component';
import {DialogSwim3Component} from './dialog/dialogSwim3/dialogSwim3.component';
import {DialogSwim4Component} from './dialog/dialogSwim4/dialogSwim4.component';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Route} from '../../constants/route.constants';
import {PageName} from '../../models/page-name.enum';


@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit{

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private pageService: PageService,
  ) { }

  ngOnInit(): void {
    this.enterPage();
  }

  showDialogDraw(): void {
    const dialogRef = this.dialog.open(DialogDrawComponent, {
      width: '800px',
      height: '500px'
    });
    this.setTime(dialogRef);
  }

  showDialogEmotion(): void {
    const dialogRef = this.dialog.open(DialogEmotionComponent, {
      width: '800px',
      height: '500px'
    });
    this.setTime(dialogRef);
  }

  showDialogMemory(): void {
    const dialogRef = this.dialog.open(DialogMemoryComponent, {
      width: '800px',
      height: '500px'
    });
    this.setTime(dialogRef);
  }

  showDialogToys(): void {
    const dialogRef = this.dialog.open(DialogToysComponent, {
      width: '800px',
      height: '500px'
    });
    this.setTime(dialogRef);
  }

  showDialogBubbles(): void {
    const dialogRef = this.dialog.open(DialogBubblesComponent, {
      width: '800px',
      height: '500px'
    });
    this.setTime(dialogRef);
  }

  showDialogSwim1(): void {
    const dialogRef = this.dialog.open(DialogSwim1Component, {
      width: '800px',
      height: '500px'
    });
    this.setTime(dialogRef);
  }

  showDialogSwim2(): void {
    const dialogRef = this.dialog.open(DialogSwim2Component, {
      width: '800px',
      height: '500px'
    });
    this.setTime(dialogRef);
  }

  showDialogSwim3(): void {
    const dialogRef = this.dialog.open(DialogSwim3Component, {
      width: '800px',
      height: '500px'
    });
    this.setTime(dialogRef);
  }

  showDialogSwim4(): void {
    const dialogRef = this.dialog.open(DialogSwim4Component, {
      width: '800px',
      height: '500px'
    });
    this.setTime(dialogRef);
  }

  private enterPage(): void {
    this.pageService.enter(PageName.exercises).subscribe(() => {
      this.navigateExercises();
    });
  }

  private navigateExercises(): void {
    this.router.navigate([Route.EXERCISES]);
  }

  private setTime(dialogRef): void{
    setTimeout(() => {
      dialogRef.close();
    }, 10000000000);
  }
}
