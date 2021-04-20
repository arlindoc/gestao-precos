/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrecoDistribuidoraService } from './precoDistribuidora.service';

describe('Service: PrecoDistribuidora', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrecoDistribuidoraService]
    });
  });

  it('should ...', inject([PrecoDistribuidoraService], (service: PrecoDistribuidoraService) => {
    expect(service).toBeTruthy();
  }));
});
