import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson14Forms } from './lesson14-forms';

describe('Lesson14Forms', () => {
  let component: Lesson14Forms;
  let fixture: ComponentFixture<Lesson14Forms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson14Forms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson14Forms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
