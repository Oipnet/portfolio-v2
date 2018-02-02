import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Slide as ISlide } from '../../interfaces/slide.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() slides: Array<string>
  public isLoaded: boolean = false;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
      this.portfolioService.sliderIsLoaded.subscribe((event: boolean) => this.isLoaded = true)
  }
}
