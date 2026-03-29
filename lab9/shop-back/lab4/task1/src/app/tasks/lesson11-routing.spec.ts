import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson11Routing } from './lesson11-routing';

describe('Lesson11Routing', () => {
  let component: Lesson11Routing;
  let fixture: ComponentFixture<Lesson11Routing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson11Routing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson11Routing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
