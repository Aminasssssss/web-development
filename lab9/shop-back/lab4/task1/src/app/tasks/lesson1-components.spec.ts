import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1Components } from './lesson1-components';

describe('Lesson1Components', () => {
  let component: Lesson1Components;
  let fixture: ComponentFixture<Lesson1Components>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson1Components]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson1Components);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
