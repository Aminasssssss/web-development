import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson15Controlvalues } from './lesson15-controlvalues';

describe('Lesson15Controlvalues', () => {
  let component: Lesson15Controlvalues;
  let fixture: ComponentFixture<Lesson15Controlvalues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson15Controlvalues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson15Controlvalues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
