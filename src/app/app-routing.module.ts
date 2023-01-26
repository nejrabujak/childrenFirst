import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './features/common/about/about.component';
import {HomepageComponent} from './features/homepage/homepage.component';
import {TipsComponent} from './features/tips/tips.component';
import {ChildrenComponent} from './features/children/children.component';
import {ExercisesComponent} from './features/exercises/exercises.component';
import {SportComponent} from './features/sport/sport.component';
import {Route} from './constants/route.constants';
import {MessageComponent} from './features/messages/message.component';
import {ThankYouComponent} from './features/thankyou/thank-you.component';

const routes: Routes = [

  {
    path: Route.ABOUT,
    component: AboutComponent
  },
  {
    path: Route.MESSAGES,
    component: MessageComponent
  },
  {
    path: Route.EMPTY,
    component: HomepageComponent
  },
  {
    path: Route.TIPS,
    component: TipsComponent
  },
  {
    path: Route.CHILDREN,
    component: ChildrenComponent
  },
  {
    path: Route.EXERCISES,
    component: ExercisesComponent
  },
  {
    path: Route.SPORT,
    component: SportComponent
  },
  {
    path: Route.MESSAGES + Route.SEPARATOR + Route.THANKYOU,
    component: ThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
