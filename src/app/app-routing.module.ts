import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { GpaCalculatorComponent } from './gpa-calculator/gpa-calculator.component';
import { OiComponent } from './oi/oi.component';
import { HorseComponent } from './horse/horse.component';
import { DogrescueComponent } from './dogrescue/dogrescue.component';
import { OtherWorkComponent } from './other-work/other-work.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MaincontentComponent
  },
  {
    path: 'gpa-calculator',
    component: GpaCalculatorComponent
  },
  {
    path: 'oi',
    component: OiComponent
  },
  {
    path: 'horse',
    component: HorseComponent
  },
  {
    path: 'dogrescue',
    component: DogrescueComponent
  },
  {
    path: 'other',
    component: OtherWorkComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
