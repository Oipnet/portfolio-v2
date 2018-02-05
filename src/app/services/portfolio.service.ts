import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

import { Meta } from '../interfaces/meta.interface';
import { Message } from '../interfaces/message.interface';
import { Slide } from '../interfaces/slide.interface';
import { NavItem } from '../interfaces/nav-item.interface';
import { ServiceItem } from '../interfaces/service-item.interface';
import { ProjectItem } from '../interfaces/project-item.interface';

import 'rxjs/add/operator/map';


@Injectable()
export class PortfolioService {
  @Output() sliderIsLoaded: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: Http) {}

  getMetas(): Observable<Array<Meta>> {
    return this.http.get(`${environment.apiUrl}/metas`)
      .map(res => {
        return res.json()['hydra:member'];
      });
  }

  getSlider(): Observable<Array<Slide>> {
    return this.http.get(`${environment.apiUrl}/slides`)
    .map(res => {
      this.sliderIsLoaded.emit(true);
      return res.json()['hydra:member'];
    });
  }

  getNavbar(): Observable<Array<NavItem>> {
    return this.http.get(`${environment.apiUrl}/navbars`)
    .map(res => {
      return res.json()['hydra:member'];
    });
  }

  getServices(): Observable<Array<ServiceItem>> {
    return this.http.get(`${environment.apiUrl}/services`)
    .map(res => {
      return res.json()['hydra:member'];
    });
  }

  getProjects(): Observable<Array<ProjectItem>> {
    return this.http.get(`${environment.apiUrl}/projects`)
    .map(res => {
      return res.json()['hydra:member'];
    });
  }

  sendMessage(message: Message): Observable<Message> {
    console.log('message');
    return this.http.post(`${environment.apiUrl}/contacts`, message)
    .map(res => {
      return res.json()['hydra:member'];
    });
  }
}
