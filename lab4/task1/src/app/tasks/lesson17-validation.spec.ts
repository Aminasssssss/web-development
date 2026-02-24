import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson17Validation } from './lesson17-validation';

describe('Lesson17Validation', () => {
  let component: Lesson17Validation;
  let fixture: ComponentFixture<Lesson17Validation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson17Validation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson17Validation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
