import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdpartywedgetComponent } from './thirdpartywedget.component';

describe('ThirdpartywedgetComponent', () => {
  let component: ThirdpartywedgetComponent;
  let fixture: ComponentFixture<ThirdpartywedgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdpartywedgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdpartywedgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
