import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp7Component } from './comp7.component';

describe('Comp7Component', () => {
  let component: Comp7Component;
  let fixture: ComponentFixture<Comp7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
