import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { Appointment } from 'src/app/classes/patient/payloads/appointments/show-appointment/appointment';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent {


  appointment: Appointment = new Appointment();
  appId!: string;
  patientId!: string;
  constructor(private patientService: PatientService, private activatedRout: ActivatedRoute, private rout: Router) { }

  ngOnInit() {

    this.appId = this.activatedRout.snapshot.params['id'];
    this.patientId = sessionStorage.getItem('patientId') ?? "";
    this.getAppointment();

  }

  getAppointment() {
    this.patientService.getAppointment(this.patientId, this.appId).subscribe({
      next: (response) => {
        this.appointment = response;
      }, error: (error) => {
        alert(error.message);
      }
    })
  }


  updateAppointment() {

    this.patientService.updateAppointment(this.appointment).subscribe({
      next: (response) => {
        alert("Appointment updated successfully");
        this.rout.navigate(["/all-appointments"]);
      }, error: (error) => {
        alert(error.message)
      }
    })

  }

}
