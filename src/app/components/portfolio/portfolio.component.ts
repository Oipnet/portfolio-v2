import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { ProjectItem } from '../../interfaces/project-item.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public projects: ProjectItem[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getProjects().subscribe((projects: ProjectItem[]) => this.projects = projects)
  }

}
