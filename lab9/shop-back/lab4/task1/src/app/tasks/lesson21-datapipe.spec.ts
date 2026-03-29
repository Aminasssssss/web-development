import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson21Datapipe } from './lesson21-datapipe';

describe('Lesson21Datapipe', () => {
  let component: Lesson21Datapipe;
  let fixture: ComponentFixture<Lesson21Datapipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson21Datapipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson21Datapipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
