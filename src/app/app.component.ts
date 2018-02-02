import { Component } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';
import { Meta as IMeta } from './interfaces/meta.interface';
import { Slide as ISlide } from './interfaces/slide.interface';
import { NavItem as INavItem } from './interfaces/nav-item.interface';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  slides: Array<ISlide>;

  constructor(private metaService: Meta, private portfolioService: PortfolioService) {
    this.portfolioService.getMetas().subscribe((metas: IMeta[]) => {
      metas.forEach((meta: IMeta) => {
        this.metaService.addTags([
          { name: meta.title, content: meta.value }
        ]);
      });
    });

    this.portfolioService.getSlider().subscribe((slides: ISlide[]) => {
      this.slides = slides;
    });
  }
}
