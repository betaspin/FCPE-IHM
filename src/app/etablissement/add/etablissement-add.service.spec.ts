/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EtablissementAddService } from './etablissement-add.service';

describe('EtablissementAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtablissementAddService]
    });
  });

  it('should ...', inject([EtablissementAddService], (service: EtablissementAddService) => {
    expect(service).toBeTruthy();
  }));
});
