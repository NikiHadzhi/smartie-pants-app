import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstancesComponent } from './add-instances.component';

describe('AddInstancesComponent', () => {
  let component: AddInstancesComponent;
  let fixture: ComponentFixture<AddInstancesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInstancesComponent]
    });
    fixture = TestBed.createComponent(AddInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
