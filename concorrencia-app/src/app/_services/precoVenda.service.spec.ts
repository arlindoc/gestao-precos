/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrecoVendaService } from './precoVenda.service';

describe('Service: PrecoVenda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrecoVendaService]
    });
  });

  it('should ...', inject([PrecoVendaService], (service: PrecoVendaService) => {
    expect(service).toBeTruthy();
  }));
});
