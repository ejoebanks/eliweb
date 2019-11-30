import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as bootstrap from "bootstrap";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { TestingComponent } from './testing/testing.component';
import { DogrescueComponent } from './dogrescue/dogrescue.component';
import { OiComponent } from './oi/oi.component';
import { HorseComponent } from './horse/horse.component';
import { OtherWorkComponent } from './other-work/other-work.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontentComponent,
    FooterComponent,
    TestingComponent,
    DogrescueComponent,
    OiComponent,
    HorseComponent,
    OtherWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
