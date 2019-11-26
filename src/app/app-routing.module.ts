import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaincontentComponent} from './maincontent/maincontent.component';
import {TestingComponent} from './testing/testing.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MaincontentComponent
  },
  {
  path: 'testing',
  component: TestingComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
