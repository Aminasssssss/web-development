import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson5Binding } from './lesson5-binding';

describe('Lesson5Binding', () => {
  let component: Lesson5Binding;
  let fixture: ComponentFixture<Lesson5Binding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson5Binding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson5Binding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
