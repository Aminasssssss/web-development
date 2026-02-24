import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson9Deferrableviews } from './lesson9-deferrableviews';

describe('Lesson9Deferrableviews', () => {
  let component: Lesson9Deferrableviews;
  let fixture: ComponentFixture<Lesson9Deferrableviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson9Deferrableviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson9Deferrableviews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
