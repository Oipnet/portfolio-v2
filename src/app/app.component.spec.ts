import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PortfolioService } from './services/portfolio.service';
import { Observable } from 'rxjs/Observable';
import { Meta as IMeta } from './interfaces/meta.interface';
import 'rxjs/add/observable/of';
import { SliderComponent } from './components/slider/slider.component';

describe('AppComponent', () => {
  const portfolioServiceStub = {
    getMetas: () => {
      return Observable.of([{title: 'meta_1', value: 'meta'}]);
    },
    getSlider: () => {
      return Observable.of([
        { src: '/src/img1', alt: 'img 1' },
        { src: '/src/img2', alt: 'img 2' },
      ]);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SliderComponent
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
  it('should render header tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header').tagName).toBe('HEADER');
  }));
});
