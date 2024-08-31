import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientLoginDto } from 'src/app/classes/patient/patient-login-dto';
import { DoctorLoginDto } from 'src/app/classes/patient/payloads/doctor-login-dto';
import { Doctorresponse } from 'src/app/interface/doctorresponse';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  patientLoginDto:PatientLoginDto=new PatientLoginDto();
  errorMessage: string | null = null;
  doctorLoginDto:DoctorLoginDto=new DoctorLoginDto();

  constructor(private patientService:PatientService,private rout:Router,private doctorService:DoctorService){}
patientLogin() {
  this.patientService.loginPatient(this.patientLoginDto).subscribe({
    next:(response)=>{

      if(response==null){
        alert("Invalid Credentials")
      }
      // console.log(response);
      localStorage.setItem('token',response.token);
      alert('Logged in successfully')
      this.rout.navigate(["/patient-dashboard"]);
      

    }, error: (error) => {
       
      this.errorMessage = error.message;
     alert(this.errorMessage)
      
    }
  })
 

}

doctorLogin() {
  this.doctorService.signIn(this.doctorLoginDto).subscribe({
    next:(response:Doctorresponse)=>{
      localStorage.setItem('tokenD',response.token);
      alert("Login Successfull")
      this.rout.navigate(['doctor-dashboard']);
      
    },error:(error)=>{
      alert(error.message)
    }
  })
  }



adminLogin() {
  throw new Error('Method not implemented.');
  }

}
