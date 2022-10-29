import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './features/common/footer/footer.component';
import { HeaderComponent } from './features/common/header/header.component';
import { ContactComponent } from './features/contact/contact.component';
import { AboutComponent } from './features/common/about/about.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { TipsComponent } from './features/tips/tips.component';
import { AppRoutingModule } from './app-routing.module';
import { ChildrenComponent } from './features/children/children.component';
import { ExercisesComponent } from './features/exercises/exercises.component';
import { SportComponent } from './features/sport/sport.component';
import { DialogComponent } from './features/exercises/dialog/dialog.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomepageComponent,
    TipsComponent,
    ChildrenComponent,
    ExercisesComponent,
    SportComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
