import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/common/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { TipsComponent } from './features/tips/tips.component';
import { ChildrenComponent } from './features/children/children.component';
import { ExercisesComponent } from './features/exercises/exercises.component';
import { SportComponent } from './features/sport/sport.component';



const routes: Routes = [

      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', component: HomepageComponent },
      { path: 'tips', component: TipsComponent },
      { path: 'children', component: ChildrenComponent },
  //      { path: 'nutrition', component: .. }
      { path: 'exercises', component: ExercisesComponent },
      { path: 'sport', component: SportComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
