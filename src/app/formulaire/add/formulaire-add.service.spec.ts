/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormulaireAddService } from './formulaire-add.service';

describe('FormulaireAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormulaireAddService]
    });
  });

  it('should ...', inject([FormulaireAddService], (service: FormulaireAddService) => {
    expect(service).toBeTruthy();
  }));
});
