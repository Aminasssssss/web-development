import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson6Eventhandling } from './lesson6-eventhandling';

describe('Lesson6Eventhandling', () => {
  let component: Lesson6Eventhandling;
  let fixture: ComponentFixture<Lesson6Eventhandling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson6Eventhandling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson6Eventhandling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
