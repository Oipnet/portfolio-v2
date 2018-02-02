import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        PortfolioService,
        { provide: XHRBackend, useClass: MockBackend}
      ]
    });
  });

  it('should be created', inject([PortfolioService], (service: PortfolioService) => {
    expect(service).toBeTruthy();
  }));

  describe('getMetas()', () => {
    const mockMetas = {
      data: [
        { title: 'meta:1:title', value: 'meta 1' },
        { title: 'meta:2:title', value: 'meta 2' }
      ]
    };

    it('Should return an Observable<Array<Meta>>',
      inject([PortfolioService, XHRBackend], (portfolioService, mockBackend) => {
        mockBackend.connections.subscribe(connection => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockMetas)
          })));
        });
        
        portfolioService.getMetas().subscribe(metas => {
          expect(metas.length).toBe(2);
          expect(metas[0].title).toEqual('meta:1:title');
          expect(metas[1].title).toEqual('meta:2:title');
        });
      })
    );
  });
});
