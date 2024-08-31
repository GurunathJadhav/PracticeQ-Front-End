import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientAppointments } from 'src/app/classes/patient/payloads/ListofAppointments/patient-appointments';
import { PatientResponce } from 'src/app/interface/patient-responce';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

 
  appointments: PatientAppointments = new PatientAppointments();
  patientId!: string;

  constructor(private patientService: PatientService,private rout:Router) {}

  searchAppointment: string = '';  // Initialize searchAppointment as a string

 
  ngOnInit() {
    this.patientId = sessionStorage.getItem('patientId') ?? "";
    this.getAllAppointments();
  }

  getAllAppointments() {
    this.patientService.getAllAppointments(this.patientId).subscribe({
      next: (response) => {
        this.appointments = response;
      },
      error: (error) => {
        alert(error.message);
      }
    });
  }

  searcheApp() {
    
    if (this.searchAppointment.trim()) {  // Check if searchAppointment has content
      this.patientService.searchAppointments(this.patientId, this.searchAppointment).subscribe({
        next: (response) => {
          this.appointments = response;
          console.log(response)
        },
        error: (error) => {
          console.log(error)
          alert(error.message);
        }
      });
    } else {
      this.getAllAppointments();  // Fetch all appointments if search is empty
    }
  }

  deleteAppointment(appId: string) {
    if(confirm("Are you want to delete appointment ?")){
      this.patientService.deleteAppointment(this.patientId,appId).subscribe({
        next:(response:PatientResponce)=>{
          alert(response.status);
          this.getAllAppointments();
  
        },error :(error)=>{
          alert(error.message)
        }
      })

    }else{
      this.getAllAppointments();
    }

    
    
    }


    updateAppointment(appId: string) {
    
      this.rout.navigate(["/update-appointment/",appId]);
    }
}
