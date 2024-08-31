import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorList } from 'src/app/classes/patient/payloads/doctor-list';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent {

  doctor: DoctorList = new DoctorList();
  id!: string;
  errorMessage!: string;
  constructor(private patientService: PatientService, private activatedRoute: ActivatedRoute,private rout:Router) {

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
   
    this.getDoctor();

    console.log("id",sessionStorage.getItem('patientId'));
  }

  getDoctor() {

   
    this.patientService.findDoctorById(this.id).subscribe({
      next: (response) => {
        this.doctor = response;
        // console.log(response)

      }, error: (error) => {
        this.errorMessage = error.message;
        alert(this.errorMessage)
      }
    })
  }

  doctorApointmet(doctorId: string) {
    this.rout.navigate(["/book-apointment/",doctorId])
    }
}
