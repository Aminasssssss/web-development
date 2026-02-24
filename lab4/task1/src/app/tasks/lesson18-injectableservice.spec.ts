import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson18Injectableservice } from './lesson18-injectableservice';

describe('Lesson18Injectableservice', () => {
  let component: Lesson18Injectableservice;
  let fixture: ComponentFixture<Lesson18Injectableservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson18Injectableservice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson18Injectableservice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
