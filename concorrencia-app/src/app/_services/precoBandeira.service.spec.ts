/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrecoBandeiraService } from './precoBandeira.service';

describe('Service: PrecoBandeira', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrecoBandeiraService]
    });
  });

  it('should ...', inject([PrecoBandeiraService], (service: PrecoBandeiraService) => {
    expect(service).toBeTruthy();
  }));
});
