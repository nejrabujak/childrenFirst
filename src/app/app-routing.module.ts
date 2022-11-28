import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/common/about/about.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { TipsComponent } from './features/tips/tips.component';
import { ChildrenComponent } from './features/children/children.component';
import { ExercisesComponent } from './features/exercises/exercises.component';
import { SportComponent } from './features/sport/sport.component';
import {Route} from './constants/route.constants';
import {MessageContainerComponent} from './containers/message/message-container.component';
import {ThankyouComponent} from './features/thankyou/thankyou.component';

const routes: Routes = [

  { path: 'about', component: AboutComponent },
  {
    path: Route.MESSAGES,
    component: MessageContainerComponent,
  },
  { path: '', component: HomepageComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'children', component: ChildrenComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'sport', component: SportComponent },
  { path: 'thankyou', component: ThankyouComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
