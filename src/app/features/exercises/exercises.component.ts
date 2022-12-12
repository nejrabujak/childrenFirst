import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
import {Page} from '../../models/page';
import {Route} from '../../constants/route.constants';
import {PageProperty} from '../../models/PageProperty';
import {PageUuidService} from '../../services/page.uuid.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit, OnDestroy{
  private sub = new Subscription();
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private pageService: PageService,
    private pageUuidService: PageUuidService
  ) { }

  // tslint:disable-next-line:typedef
  public getPage(){
    return 'exercises';
  }
  // tslint:disable-next-line:typedef
  public getEnter(){
    return 'enter';
  }

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
      this.router.navigate([Route.EXERCISES]);
    });
  }

  // tslint:disable-next-line:typedef
  showDialogDraw(){
    const dialogRef = this.dialog.open(DialogDrawComponent, {
      width: '800px',
      height: '500px'
    });
    setTimeout(() => {
      dialogRef.close();
    }, 10000000000);
  }

  // tslint:disable-next-line:typedef
  showDialogEmotion(){
    const dialogRef = this.dialog.open(DialogEmotionComponent, {
      width: '800px',
      height: '500px'
    });
    setTimeout(() => {
      dialogRef.close();
    }, 10000000000);
  }

  // tslint:disable-next-line:typedef
  showDialogMemory(){
    const dialogRef = this.dialog.open(DialogMemoryComponent, {
      width: '800px',
      height: '500px'
    });
    setTimeout(() => {
      dialogRef.close();
    }, 10000000000);
  }

  // tslint:disable-next-line:typedef
  showDialogToys(){
    const dialogRef = this.dialog.open(DialogToysComponent, {
      width: '800px',
      height: '500px'
    });
    setTimeout(() => {
      dialogRef.close();
    }, 10000000000);
  }

  // tslint:disable-next-line:typedef
  showDialogBubbles(){
    const dialogRef = this.dialog.open(DialogBubblesComponent, {
      width: '800px',
      height: '500px'
    });
    setTimeout(() => {
      dialogRef.close();
    }, 10000000000);
  }

  // tslint:disable-next-line:typedef
  showDialogSwim1(){
    const dialogRef = this.dialog.open(DialogSwim1Component, {
      width: '800px',
      height: '500px'
    });
    setTimeout(() => {
      dialogRef.close();
    }, 10000000000);
  }

  // tslint:disable-next-line:typedef
  showDialogSwim2(){
    const dialogRef = this.dialog.open(DialogSwim2Component, {
      width: '800px',
      height: '500px'
    });
    setTimeout(() => {
      dialogRef.close();
    }, 10000000000);
  }

  // tslint:disable-next-line:typedef
  showDialogSwim3(){
    const dialogRef = this.dialog.open(DialogSwim3Component, {
      width: '800px',
      height: '500px'
    });
    setTimeout(() => {
      dialogRef.close();
    }, 10000000000);
  }

  // tslint:disable-next-line:typedef
  showDialogSwim4(){
    const dialogRef = this.dialog.open(DialogSwim4Component, {
      width: '800px',
      height: '500px'
    });
    setTimeout(() => {
      dialogRef.close();
    }, 10000000000);
  }
  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}
