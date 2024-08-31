import { Component } from '@angular/core';
import { Patient } from 'src/app/classes/patient/patient';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  patient:Patient=new Patient();

  errorMessage!:string
  constructor(private patientService:PatientService){}

  ngOnInit(){

    this.getProfile();
  }

  getProfile(){
    this.patientService.patientProfile().subscribe({
      next:(response)=>{
        this.patient=response;
      },
      error: (error) => {
       
        this.errorMessage = error.message;
       alert(this.errorMessage)
        
      }
    })
    

  }

}
