import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { ServiceItem as IService } from '../../interfaces/service-item.interface';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public services: IService[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
      this.portfolioService.getServices().subscribe((services: IService[] ) => {
          this.services = services;
      });
  }

}
