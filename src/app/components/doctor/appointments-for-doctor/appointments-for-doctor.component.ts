import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AcceptedAppointment } from 'src/app/classes/patient/payloads/doctor/accepted-appointment';
import { AllAppointments } from 'src/app/classes/patient/payloads/doctor/all-appointments';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-appointments-for-doctor',
  templateUrl: './appointments-for-doctor.component.html',
  styleUrls: ['./appointments-for-doctor.component.css']
})
export class AppointmentsForDoctorComponent {


  isEmergency: boolean = false;


  allAppointments: AllAppointments = new AllAppointments();

  acceptApp: AcceptedAppointment = new AcceptedAppointment();
  constructor(private doctorService: DoctorService,
    private route: Router
  ) { }

  ngOnInit() {
    this.appointments();

  }

  appointments() {
    this.doctorService.getAllApointmentsForDoctor().subscribe({
      next: (response) => {
        // console.log(response)
        this.allAppointments = response;
      }, error: (error) => {
        alert(error.message)
      }

    })
  }
  handleEmergencyChange() {

    if (this.isEmergency) {
      this.doctorService.getEmergencyAppointments(this.isEmergency).subscribe({
        next: (response) => {
          this.allAppointments = response;

        }, error: (error) => {
          alert(error.message)
        }
      })
    } else {
      this.appointments();
    }

  }


  appoint(appId: string) {

    const accceptAppointment: any = {
      appointmentId: appId,
      doctorId: ""

    }

    this.doctorService.acceptApp(accceptAppointment).subscribe({
      next: (respose) => {
        alert("Appointment is accepted")
        this.acceptApp = respose;


        this.route.navigate(["/accepted-appointment/", this.acceptApp.acapId])

      }, error: (error) => {
        alert(error.message)
      }
    })


  }

}
