import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcceptedAppointment } from 'src/app/classes/patient/payloads/doctor/accepted-appointment';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-accepted-appointment',
  templateUrl: './accepted-appointment.component.html',
  styleUrls: ['./accepted-appointment.component.css']
})
export class AcceptedAppointmentComponent {


  accptedApp:AcceptedAppointment=new AcceptedAppointment();

  constructor(private doctorService:DoctorService,private activatedRout:ActivatedRoute,private route:Router){}

  ngOnInit(){

    this.accptedApp.acapId=this.activatedRout.snapshot.params['id']
    this.getAppointment();
  }

  getAppointment(){
    this.doctorService.getAcceptApp(this.accptedApp.acapId).subscribe({
      next:(response)=>{
        console.log(response);
        this.accptedApp=response;
      },error:(error)=>{
        alert(error.message)
      }
    })
  }
  createPrescription() {
    this.route.navigate(["/create-prescription/",this.accptedApp.appointments.patient.patientId]);
    }

}
