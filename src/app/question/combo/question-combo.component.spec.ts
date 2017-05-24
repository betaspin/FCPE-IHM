import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComboComponent } from './question-combo.component';

describe('QuestionComboComponent', () => {
  let component: QuestionComboComponent;
  let fixture: ComponentFixture<QuestionComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
