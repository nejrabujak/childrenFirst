import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AboutComponent} from './features/common/about/about.component';
import {ChildrenComponent} from './features/children/children.component';
import {DialogBubblesComponent} from './features/exercises/dialog/dialog-bubbles/dialog-bubbles.component';
import {DialogDrawComponent} from './features/exercises/dialog/dialog-draw/dialog-draw.component';
import {DialogEmotionComponent} from './features/exercises/dialog/dialog-emotion/dialog-emotion.component';
import {DialogMemoryComponent} from './features/exercises/dialog/dialog-memory/dialog-memory.component';
import {DialogSwim1Component} from './features/exercises/dialog/dialog-swim1/dialog-swim1.component';
import {DialogSwim2Component} from './features/exercises/dialog/dialog-swim2/dialog-swim2.component';
import {DialogSwim3Component} from './features/exercises/dialog/dialog-swim3/dialog-swim3.component';
import {DialogSwim4Component} from './features/exercises/dialog/dialog-swim4/dialog-swim4.component';
import {DialogToysComponent} from './features/exercises/dialog/dialog-toys/dialog-toys.component';
import {ExercisesComponent} from './features/exercises/exercises.component';
import {FooterComponent} from './features/common/footer/footer.component';
import {HeaderComponent} from './features/common/header/header.component';
import {HomepageComponent} from './features/homepage/homepage.component';
import {MessageComponent} from './features/messages/message.component';
import {SportComponent} from './features/sport/sport.component';
import {TipsComponent} from './features/tips/tips.component';
import {ThankYouComponent} from './features/thankyou/thank-you.component';

import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {YouTubePlayerModule} from '@angular/youtube-player';

import {CardService} from './services/card.service';
import {MessageService} from './services/message.service';
import {PageService} from './services/page.service';
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
    SportComponent,
    TipsComponent,
    ThankYouComponent
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
    DialogToysComponent,
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
