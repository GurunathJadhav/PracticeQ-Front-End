import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
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


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    PatientDashboardComponent,
    DoctorInfoComponent,
    AppointmentComponent,
    AppointmentsComponent,
    DoctorsListComponent,
    UpdateAppointmentComponent,
    DoctorProfileComponent,
    DoctorDashboardComponent,
    AppointmentsForDoctorComponent,
    AcceptedAppointmentComponent,
    CreatePrescriptionComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
