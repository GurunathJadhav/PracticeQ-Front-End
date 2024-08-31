import { Component } from '@angular/core';
import { Patient } from '../classes/patient/patient';
import { PatientService } from '../services/patient/patient.service';
import { PatientResponce } from '../interface/patient-responce';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  patient: Patient = new Patient();
  errorMessage: string | null = null;

  constructor(private patientService: PatientService) {}

  patientRegistration() {
    this.patientService.patientRegistration(this.patient).subscribe({
      next: (response) => {

        alert('Patient registered successfully')
      
        console.log('Patient registered successfully', response);
       
      },
      error: (error) => {
       
        this.errorMessage = error.message;
       alert(this.errorMessage)
        
      }
    });
  }
      
   
      
  }

