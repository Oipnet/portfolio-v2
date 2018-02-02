import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

import { Meta } from '../Interfaces/meta.interface';

import 'rxjs/add/operator/map';

@Injectable()
export class PortfolioService {

  constructor(private http: Http) { }

  getMetas(): Observable<Array<Meta>> {
    return this.http.get(`${environment.apiUrl}/metas`)
      .map(res => res.json().data);
  }
}
