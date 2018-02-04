import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { NavItem } from '../../../interfaces/nav-item.interface';

import { NavbarService } from '../../../services/navbar.service'

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {
  @Input() item: NavItem;
  
  public active: boolean = false;

  constructor(private elementRef: ElementRef, private navbarService: NavbarService) { 
  }

  ngOnInit() {
    this.navbarService.disactiveElement.subscribe((element: ElementRef) => {
      console.log(this.elementRef === element)
      this.active = this.elementRef === element 
    });
  }

  public get isAnchor(): boolean{
      return this.item.href.substring(0,1) === '#';
  }

  public fireClickElement() {
    this.navbarService.manageActiveElement(this.elementRef);
  }
}
