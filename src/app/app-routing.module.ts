import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/patient/profile/profile.component';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { DoctorInfoComponent } from './components/patient/doctor-info/doctor-info.component';
import { AppointmentComponent } from './components/patient/appointment/appointment.component';
import { AppointmentsComponent } from './components/patient/appointments/appointments.component';
import { DoctorsListComponent } from './components/patient/doctors-list/doctors-list.component';
import { UpdateAppointmentComponent } from './components/patient/update-appointment/update-appointment.component';
import { DoctorProfileComponent } from './components/doctor/doctor-profile/doctor-profile.component';
import { DoctorDashboardComponent } from './components/doctor/doctor-dashboard/doctor-dashboard.component';
import { AppointmentsForDoctorComponent } from './components/doctor/appointments-for-doctor/appointments-for-doctor.component';
import { AcceptedAppointmentComponent } from './components/doctor/accepted-appointment/accepted-appointment.component';
import { CreatePrescriptionComponent } from './components/doctor/create-prescription/create-prescription.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent},
  {path:"patient-dashboard",component:PatientDashboardComponent},
  {path:"doctor-info/:id",component:DoctorInfoComponent},
  {path:"book-apointment/:id",component:AppointmentComponent},
  {path:"all-appointments",component:AppointmentsComponent},
  {path:"all-doctors",component:DoctorsListComponent},
  {path:"update-appointment/:id",component:UpdateAppointmentComponent},
  {path:"doctor-profile",component:DoctorProfileComponent},
  {path:"doctor-dashboard",component:DoctorDashboardComponent},
  {path:"appointments-for-doctor",component:AppointmentsForDoctorComponent},
  {path:"accepted-appointment/:id",component:AcceptedAppointmentComponent},
  {path:"create-prescription/:id",component:CreatePrescriptionComponent},
  {path:"",redirectTo:"home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
