import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to';
import { AgmCoreModule } from '@agm/core';
import { route } from './app.routing';

import { PortfolioService } from './services/portfolio.service';
import { NavbarService } from './services/navbar.service';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlideComponent } from './components/slider/slide/slide.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavItemComponent } from './components/navbar/nav-item/nav-item.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceItemComponent } from './components/services/service-item/service-item.component';
import { MapComponent } from './components/map/map.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SliderComponent,
    SlideComponent,
    NavbarComponent,
    NavItemComponent,
    ServicesComponent,
    ServiceItemComponent,
    MapComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot(
      route,
      { enableTracing: true }
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAh34dO5ObROaXXJl1lacdQGawGWEZUuyw'
    }),
    FormsModule
  ],
  providers: [
    PortfolioService, NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
