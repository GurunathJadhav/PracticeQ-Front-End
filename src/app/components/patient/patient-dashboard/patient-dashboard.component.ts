import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient/patient';
import { DoctorList } from 'src/app/classes/patient/payloads/doctor-list';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {


  search!:string;
  errorMessage!:string;
 
  doctorList:DoctorList[]=[];
  patient:Patient=new Patient();
  constructor(private patientService:PatientService,private rout:Router){}

  ngOnInit(): void {
    this.getProfile();
  }
  getProfile(){
    this.patientService.patientProfile().subscribe({
      next:(response)=>{
        this.patient=response;
        sessionStorage.setItem('patientId',this.patient.patientId);
      },
      error: (error) => {
       
        this.errorMessage = error.message;
       alert(this.errorMessage)
        
      }
    })
    

  }
  searchDoctor() {
    this.patientService.searchDoctor(this.search).subscribe({
      next:(data)=>{
        this.doctorList=data;
        // console.log(data)
      }, error:(error)=>{
        this.errorMessage = error.message;
        if(this.search==""){
          this.doctorList=[];
        }else{
          alert(this.errorMessage)
        }
       
    
      }
    })

}

allDoctors() {
  
  this.rout.navigate(["/all-doctors"])
  }
 

}
