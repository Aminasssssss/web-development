import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson13Routerlink } from './lesson13-routerlink';

describe('Lesson13Routerlink', () => {
  let component: Lesson13Routerlink;
  let fixture: ComponentFixture<Lesson13Routerlink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson13Routerlink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson13Routerlink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
