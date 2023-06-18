import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestRevenueComponent } from './highest-revenue.component';

describe('HighestRevenueComponent', () => {
  let component: HighestRevenueComponent;
  let fixture: ComponentFixture<HighestRevenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighestRevenueComponent]
    });
    fixture = TestBed.createComponent(HighestRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
