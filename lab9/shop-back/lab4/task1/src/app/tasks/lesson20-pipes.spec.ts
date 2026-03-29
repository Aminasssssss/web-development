import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson20Pipes } from './lesson20-pipes';

describe('Lesson20Pipes', () => {
  let component: Lesson20Pipes;
  let fixture: ComponentFixture<Lesson20Pipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson20Pipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson20Pipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
