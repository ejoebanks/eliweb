import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaincontentComponent} from './maincontent/maincontent.component';
import {TestingComponent} from './testing/testing.component';
import {OiComponent} from './oi/oi.component';
import {HorseComponent} from './horse/horse.component';
import {DogrescueComponent} from './dogrescue/dogrescue.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MaincontentComponent
  },
  {
  path: 'testing',
  component: TestingComponent
},
{
  path : 'oi',
  component: OiComponent
},
{
  path : 'horse',
  component: HorseComponent
},
{
  path : 'dogrescue',
  component: DogrescueComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
