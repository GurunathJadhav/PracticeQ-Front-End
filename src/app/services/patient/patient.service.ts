import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Patient } from 'src/app/classes/patient/patient';
import { PatientLoginDto } from 'src/app/classes/patient/patient-login-dto';
import { CreateAppointment } from 'src/app/classes/patient/payloads/appointments/create-appointment';
import { Appointment } from 'src/app/classes/patient/payloads/appointments/show-appointment/appointment';
import { DoctorList } from 'src/app/classes/patient/payloads/doctor-list';
import { PatientAppointments } from 'src/app/classes/patient/payloads/ListofAppointments/patient-appointments';
import { PatientResponce } from 'src/app/interface/patient-responce';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = "http://localhost:8080/api/patient";

  constructor(private http: HttpClient) { }

  patientRegistration(patient: Patient): Observable<PatientResponce> {
    return this.http.post<PatientResponce>(`${this.baseUrl}/signup`, patient)
      .pipe(catchError(this.handleError));
  }

  loginPatient(loginPatient: PatientLoginDto): Observable<PatientResponce> {
    return this.http.post<PatientResponce>(`${this.baseUrl}/sign-in`, loginPatient)
      .pipe(catchError(this.handleError));
  }

  patientProfile(): Observable<Patient> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get<Patient>(`${this.baseUrl}/profile`, { headers })
      .pipe(catchError(this.handleError));
  }

  searchDoctor(search: string): Observable<DoctorList[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get<DoctorList[]>(`${this.baseUrl}/doctors/${search}`, { headers })
      .pipe(catchError(this.handleError));
  }

  findDoctorById(doctorId: string): Observable<DoctorList> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get<DoctorList>(`${this.baseUrl}/doctor/${doctorId}`, { headers })
      .pipe(catchError(this.handleError));
  }

  createAppointment(appointment: CreateAppointment): Observable<CreateAppointment> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.post<CreateAppointment>(`http://localhost:8080/api/appointments/createApp`, appointment, { headers })
      .pipe(catchError(this.handleError));
  }

  getAllAppointments(patientId: string): Observable<PatientAppointments> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get<PatientAppointments>(`${this.baseUrl}/appointments/${patientId}`, { headers })
      .pipe(catchError(this.handleError));
  }

  searchAppointments(patientId: string, search: string): Observable<PatientAppointments> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get<PatientAppointments>(`${this.baseUrl}/${patientId}/${search}`, { headers })
      .pipe(catchError(this.handleError));
  }

  doctors(): Observable<DoctorList[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get<DoctorList[]>(`${this.baseUrl}/doctors`, { headers })
      .pipe(catchError(this.handleError))
  }

  deleteAppointment(patientId: String, appId: String): Observable<PatientResponce> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.delete<PatientResponce>(`${this.baseUrl}/${patientId}/${appId}`, { headers })
      .pipe(catchError(this.handleError));

  }

  getAppointment(patientId: string, appId: string): Observable<Appointment> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get<Appointment>(`http://localhost:8080/api/appointments/${patientId}/${appId}`, { headers })
      .pipe(catchError(this.handleError));

  }

  updateAppointment(appointment: Appointment): Observable<Appointment> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.put<Appointment>(`http://localhost:8080/api/appointments/update`, appointment, { headers })
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if (error.status === 400) {
        errorMessage = 'Bad Request: ' + error.error.emailExists;
      } else if (error.status === 500) {
        errorMessage = 'Internal Server Error: ' + error.error.validationError;
      } else if (error.status === 401) {
        errorMessage = 'UNAUTHORIZED: ' + error.error.message;
      } else {
        errorMessage = `Error ${error.status}: ${error.error.message || error.message}`;
      }
    }
    return throwError(() => new Error(errorMessage));
  }
}
