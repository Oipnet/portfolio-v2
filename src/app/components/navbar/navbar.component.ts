import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { NavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private items: NavItem[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getNavbar().subscribe((navItem: NavItem[]) => {
      this.items = navItem;
    });
  }

}
