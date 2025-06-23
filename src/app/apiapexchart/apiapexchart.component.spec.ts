import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiapexchartComponent } from './apiapexchart.component';

describe('ApiapexchartComponent', () => {
  let component: ApiapexchartComponent;
  let fixture: ComponentFixture<ApiapexchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiapexchartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiapexchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
