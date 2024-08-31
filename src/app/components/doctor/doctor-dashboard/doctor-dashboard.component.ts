import { Component } from '@angular/core';
import { DoctorList } from 'src/app/classes/patient/payloads/doctor-list';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent {

  doctor:DoctorList=new DoctorList();

  constructor(private doctorService:DoctorService){}

  ngOnInit(){

    this.getProfile();
  }

  getProfile(){
    this.doctorService.profile().subscribe({
      next:(response)=>{
        this.doctor=response;
        // console.log(response)
        sessionStorage.setItem('doctorId',response.doctorId);
      },error:(error)=>{
        alert(error.message)
      }
    })
  }

}
