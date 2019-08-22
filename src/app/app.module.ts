import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as bootstrap from "bootstrap";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutmeComponent,
    MaincontentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
