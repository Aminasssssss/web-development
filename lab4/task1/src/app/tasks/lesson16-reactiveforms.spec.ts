import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson16Reactiveforms } from './lesson16-reactiveforms';

describe('Lesson16Reactiveforms', () => {
  let component: Lesson16Reactiveforms;
  let fixture: ComponentFixture<Lesson16Reactiveforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson16Reactiveforms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson16Reactiveforms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
