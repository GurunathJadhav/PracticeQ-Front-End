import { Component } from '@angular/core';
import { DoctorList } from 'src/app/classes/patient/payloads/doctor-list';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent {

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
      },error:(error)=>{
        alert(error.message)
      }
    })
  }

}
