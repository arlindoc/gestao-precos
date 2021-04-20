/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BandeiraService } from './bandeira.service';

describe('Service: Bandeira', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandeiraService]
    });
  });

  it('should ...', inject([BandeiraService], (service: BandeiraService) => {
    expect(service).toBeTruthy();
  }));
});
