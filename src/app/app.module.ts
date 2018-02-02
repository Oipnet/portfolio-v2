import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { PortfolioService } from './services/portfolio.service';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlideComponent } from './components/slider/slide/slide.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavItemComponent } from './components/navbar/nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SlideComponent,
    NavbarComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [
    PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
