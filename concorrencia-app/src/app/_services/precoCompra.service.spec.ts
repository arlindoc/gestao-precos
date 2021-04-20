/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrecoCompraService } from './precoCompra.service';

describe('Service: PrecoCompra', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrecoCompraService]
    });
  });

  it('should ...', inject([PrecoCompraService], (service: PrecoCompraService) => {
    expect(service).toBeTruthy();
  }));
});
