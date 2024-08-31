import { Component, OnInit } from '@angular/core';
import { DoctorList } from 'src/app/classes/patient/payloads/doctor-list';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {

  doctorsList: DoctorList[] = [];
  departmentGroups: any[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.allDoctors();
  }

  allDoctors() {
    this.patientService.doctors().subscribe({
      next: (response) => {
        this.doctorsList = response;
        this.groupDoctorsByDepartment();
      },
      error: (error) => {
        alert(error.message);
      }
    });
  }

  groupDoctorsByDepartment() {
    const departmentMap = new Map<string, any>();

    this.doctorsList.forEach(doctor => {
      const departmentName = doctor.departmentInfo.departmentName;
      if (!departmentMap.has(departmentName)) {
        departmentMap.set(departmentName, {
          name: departmentName,
          backgroundImage: this.getBackgroundImageForDepartment(departmentName),
          doctors: []
        });
      }
      departmentMap.get(departmentName).doctors.push(doctor);
    });

    this.departmentGroups = Array.from(departmentMap.values());
  }

  getBackgroundImageForDepartment(departmentName: string): string {
    switch (departmentName) {
      case 'Cardiology':
        return '/assets/images/cardiology.jpg';
      case 'Neurology':
        return '/assets/images/neurology.jpg';
      case 'Pediatrics':
        return '/assets/images/Pediatrics.jpg';
      // Add more cases as needed
      default:
        return '/assets/images/default-bg.jpg';
    }
  }
}
