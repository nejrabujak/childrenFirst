import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './features/common/footer/footer.component';
import { HeaderComponent } from './features/common/header/header.component';
import { MessageComponent } from './features/contact/message.component';
import { AboutComponent } from './features/common/about/about.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { TipsComponent } from './features/tips/tips.component';
import { AppRoutingModule } from './app-routing.module';
import { ChildrenComponent } from './features/children/children.component';
import { ExercisesComponent } from './features/exercises/exercises.component';
import { SportComponent } from './features/sport/sport.component';
import { DialogDrawComponent } from './features/exercises/dialog/dialogDraw/dialogDraw.component';
import { DialogBuildComponent } from './features/exercises/dialog/dialogBuild/dialogBuild.component';
import { DialogEmotionComponent } from './features/exercises/dialog/dialogEmotion/dialogEmotion.component';
import { DialogMemoryComponent } from './features/exercises/dialog/dialogMemory/dialogMemory.component';
import { DialogToysComponent } from './features/exercises/dialog/dialogToys/dialogToys.component';
import { DialogSwim1Component } from './features/exercises/dialog/dialogSwim1/dialogSwim1.component';
import { DialogSwim2Component } from './features/exercises/dialog/dialogSwim2/dialogSwim2.component';
import { DialogSwim3Component } from './features/exercises/dialog/dialogSwim3/dialogSwim3.component';
import { DialogSwim4Component } from './features/exercises/dialog/dialogSwim4/dialogSwim4.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MessageContainerComponent} from './containers/message/message-container.component';
import {MessageService} from './services/message.service';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    MessageComponent,
    HomepageComponent,
    TipsComponent,
    ChildrenComponent,
    ExercisesComponent,
    SportComponent,
    DialogDrawComponent,
    DialogBuildComponent,
    DialogEmotionComponent,
    DialogMemoryComponent,
    DialogToysComponent,
    DialogSwim1Component,
    DialogSwim2Component,
    DialogSwim3Component,
    DialogSwim4Component,
    MessageContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DialogDrawComponent,
    DialogBuildComponent,
    DialogEmotionComponent,
    DialogMemoryComponent,
    DialogToysComponent,
    DialogSwim1Component,
    DialogSwim2Component,
    DialogSwim3Component,
    DialogSwim4Component
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
