import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson10Optimizingimages } from './lesson10-optimizingimages';

describe('Lesson10Optimizingimages', () => {
  let component: Lesson10Optimizingimages;
  let fixture: ComponentFixture<Lesson10Optimizingimages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson10Optimizingimages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson10Optimizingimages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
