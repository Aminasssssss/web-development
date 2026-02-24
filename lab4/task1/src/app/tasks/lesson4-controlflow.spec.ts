import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson4Controlflow } from './lesson4-controlflow';

describe('Lesson4Controlflow', () => {
  let component: Lesson4Controlflow;
  let fixture: ComponentFixture<Lesson4Controlflow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson4Controlflow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson4Controlflow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
