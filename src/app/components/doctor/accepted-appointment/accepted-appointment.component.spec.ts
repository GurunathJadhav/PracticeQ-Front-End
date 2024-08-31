import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedAppointmentComponent } from './accepted-appointment.component';

describe('AcceptedAppointmentComponent', () => {
  let component: AcceptedAppointmentComponent;
  let fixture: ComponentFixture<AcceptedAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptedAppointmentComponent]
    });
    fixture = TestBed.createComponent(AcceptedAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
