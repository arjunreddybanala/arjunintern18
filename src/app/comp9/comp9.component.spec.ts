import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp9Component } from './comp9.component';

describe('Comp9Component', () => {
  let component: Comp9Component;
  let fixture: ComponentFixture<Comp9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
