import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShwpHomeComponent } from './shwp-home.component';

describe('ShwpHomeComponent', () => {
  let component: ShwpHomeComponent;
  let fixture: ComponentFixture<ShwpHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShwpHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShwpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
