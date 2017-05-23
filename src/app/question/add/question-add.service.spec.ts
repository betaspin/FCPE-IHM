import { TestBed, inject } from '@angular/core/testing';

import { QuestionAddService } from './question-add.service';

describe('QuestionAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionAddService]
    });
  });

  it('should ...', inject([QuestionAddService], (service: QuestionAddService) => {
    expect(service).toBeTruthy();
  }));
});
