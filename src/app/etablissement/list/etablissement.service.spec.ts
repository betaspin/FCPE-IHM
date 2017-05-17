/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EtablissementService } from './etablissement.service';

describe('EtablissementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtablissementService]
    });
  });

  it('should ...', inject([EtablissementService], (service: EtablissementService) => {
    expect(service).toBeTruthy();
  }));
});
