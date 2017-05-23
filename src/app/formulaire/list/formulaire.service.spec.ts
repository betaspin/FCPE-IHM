/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormulaireService } from './formulaire.service';

describe('FormulaireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormulaireService]
    });
  });

  it('should ...', inject([FormulaireService], (service: FormulaireService) => {
    expect(service).toBeTruthy();
  }));
});
