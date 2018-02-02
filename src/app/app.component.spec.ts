import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PortfolioService } from './Services/portfolio.service';
import { Observable } from 'rxjs/Observable';
import { Meta as IMeta } from './Interfaces/meta.interface';
import 'rxjs/add/observable/of';

describe('AppComponent', () => {
  const portfolioServiceStub = {
    getMetas: () => {
      return Observable.of([{title: 'meta_1', value: 'meta'}]);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: PortfolioService, useValue: portfolioServiceStub }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
