import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Slide } from '../../../interfaces/slide.interface';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() slide: Slide;

  constructor() { }

  ngOnInit() {
  }

  public get absoluteSrc(){
    return `${environment.backEndUrl}${this.slide.src}`
  }

}
