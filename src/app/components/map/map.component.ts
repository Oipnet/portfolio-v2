import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public lat: number = 44.60285219999999;
  public lng: number = -0.33749119999993127;
  public zoom: number = 13;

  constructor() { }

  ngOnInit() {
  }

}
