import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson2Templates } from './lesson2-templates';

describe('Lesson2Templates', () => {
  let component: Lesson2Templates;
  let fixture: ComponentFixture<Lesson2Templates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson2Templates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson2Templates);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
