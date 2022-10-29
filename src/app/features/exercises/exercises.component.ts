import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit{
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showDialog(){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      height: '200px'
    });
    setTimeout(() => {
      dialogRef.close();
    }, 10000);
  }
}
