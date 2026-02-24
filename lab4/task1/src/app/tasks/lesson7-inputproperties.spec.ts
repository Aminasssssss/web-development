import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson7Inputproperties } from './lesson7-inputproperties';

describe('Lesson7Inputproperties', () => {
  let component: Lesson7Inputproperties;
  let fixture: ComponentFixture<Lesson7Inputproperties>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson7Inputproperties]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson7Inputproperties);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
