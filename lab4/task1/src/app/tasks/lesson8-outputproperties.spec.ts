import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson8Outputproperties } from './lesson8-outputproperties';

describe('Lesson8Outputproperties', () => {
  let component: Lesson8Outputproperties;
  let fixture: ComponentFixture<Lesson8Outputproperties>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson8Outputproperties]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson8Outputproperties);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
