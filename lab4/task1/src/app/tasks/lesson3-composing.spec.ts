import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson3Composing } from './lesson3-composing';

describe('Lesson3Composing', () => {
  let component: Lesson3Composing;
  let fixture: ComponentFixture<Lesson3Composing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson3Composing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson3Composing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
