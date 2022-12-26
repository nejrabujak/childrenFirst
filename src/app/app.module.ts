import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './features/common/about/about.component';
import { ChildrenComponent } from './features/children/children.component';
import {DialogBubblesComponent} from './features/exercises/dialog/dialogBubbles/dialog-bubbles.component';
import { DialogDrawComponent } from './features/exercises/dialog/dialogDraw/dialogDraw.component';
import { DialogEmotionComponent } from './features/exercises/dialog/dialogEmotion/dialogEmotion.component';
import { DialogMemoryComponent } from './features/exercises/dialog/dialogMemory/dialogMemory.component';
import { DialogSwim1Component } from './features/exercises/dialog/dialogSwim1/dialogSwim1.component';
import { DialogSwim2Component } from './features/exercises/dialog/dialogSwim2/dialogSwim2.component';
import { DialogSwim3Component } from './features/exercises/dialog/dialogSwim3/dialogSwim3.component';
import { DialogSwim4Component } from './features/exercises/dialog/dialogSwim4/dialogSwim4.component';
import { DialogToysComponent } from './features/exercises/dialog/dialogToys/dialogToys.component';
import { ExercisesComponent } from './features/exercises/exercises.component';
import { FooterComponent } from './features/common/footer/footer.component';
import { HeaderComponent } from './features/common/header/header.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { MessageComponent } from './features/contact/message.component';
import { MessageContainerComponent } from './containers/message/message-container.component';
import { SportComponent } from './features/sport/sport.component';
import { TipsComponent } from './features/tips/tips.component';
import { ThankyouComponent } from './features/thankyou/thankyou.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { CardService } from './services/card.service';
import { MessageService } from './services/message.service';
import { PageService } from './services/page.service';
import {PageUuidService} from './services/page-uuid.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ChildrenComponent,
    DialogBubblesComponent,
    DialogDrawComponent,
    DialogEmotionComponent,
    DialogMemoryComponent,
    DialogSwim1Component,
    DialogSwim2Component,
    DialogSwim3Component,
    DialogSwim4Component,
    DialogToysComponent,
    ExercisesComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    MessageComponent,
    MessageContainerComponent,
    SportComponent,
    TipsComponent,
    ThankyouComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    YouTubePlayerModule
  ],
  entryComponents: [
    DialogBubblesComponent,
    DialogDrawComponent,
    DialogEmotionComponent,
    DialogMemoryComponent,
    DialogSwim1Component,
    DialogSwim2Component,
    DialogSwim3Component,
    DialogSwim4Component,
    DialogToysComponent
    // ,ExitComponent
  ],
  providers: [
    CardService,
    MessageService,
    PageService,
    PageUuidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
