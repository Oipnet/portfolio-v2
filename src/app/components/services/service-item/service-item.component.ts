import { Component, OnInit, Input } from '@angular/core';
import { ServiceItem } from '../../../interfaces/service-item.interface';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {
  @Input() service: ServiceItem;

  constructor() { }

  ngOnInit() {
  }

}
