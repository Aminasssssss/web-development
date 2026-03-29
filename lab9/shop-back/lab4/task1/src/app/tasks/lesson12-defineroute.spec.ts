import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson12Defineroute } from './lesson12-defineroute';

describe('Lesson12Defineroute', () => {
  let component: Lesson12Defineroute;
  let fixture: ComponentFixture<Lesson12Defineroute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson12Defineroute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson12Defineroute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
