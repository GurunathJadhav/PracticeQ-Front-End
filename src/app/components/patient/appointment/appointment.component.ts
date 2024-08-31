import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateAppointment } from 'src/app/classes/patient/payloads/appointments/create-appointment';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  appointment:CreateAppointment=new CreateAppointment();

  doctorId!:string;

  patientId!:string;
  constructor(private activatedRout:ActivatedRoute,private patientService:PatientService,private rout:Router){}

  ngOnInit(){

    this.doctorId=this.activatedRout.snapshot.params['id'];
    this.appointment.doctorId=this.doctorId;
    this.patientId = sessionStorage.getItem('patientId') ?? '';
    this.appointment.patientId=this.patientId;
    

  }
createAppointment() {
  this.patientService.createAppointment(this.appointment).subscribe({
    next:(response)=>{
      // console.log(response)
      alert('Appointment booked successfully')

      this.rout.navigate(["/all-appointments"])

    },error :(error)=>{
      
      alert(error.message)
 
    }
  })

  console.log(this.appointment)

 

}

}
