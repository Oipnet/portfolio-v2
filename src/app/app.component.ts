import { Component } from '@angular/core';
import { PortfolioService } from './Services/portfolio.service';
import { Meta as IMeta } from './Interfaces/meta.interface';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private metaService: Meta, private portfolioService: PortfolioService) {
    this.portfolioService.getMetas().subscribe((metas: IMeta[]) => {
      metas.forEach((meta: IMeta) => {
        this.metaService.addTags([
          { name: meta.title, content: meta.value }
        ]);
      });
    });
  }
}
