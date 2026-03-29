import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson22Createpipe } from './lesson22-createpipe';

describe('Lesson22Createpipe', () => {
  let component: Lesson22Createpipe;
  let fixture: ComponentFixture<Lesson22Createpipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson22Createpipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson22Createpipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
