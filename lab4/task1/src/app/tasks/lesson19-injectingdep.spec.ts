import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson19Injectingdep } from './lesson19-injectingdep';

describe('Lesson19Injectingdep', () => {
  let component: Lesson19Injectingdep;
  let fixture: ComponentFixture<Lesson19Injectingdep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson19Injectingdep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson19Injectingdep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
