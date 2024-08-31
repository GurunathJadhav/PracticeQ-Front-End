import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Patient } from 'src/app/classes/patient/patient';
import { Appointment } from 'src/app/classes/patient/payloads/appointments/show-appointment/appointment';
import { DoctorList } from 'src/app/classes/patient/payloads/doctor-list';
import { DoctorLoginDto } from 'src/app/classes/patient/payloads/doctor-login-dto';
import { AcceptedAppointment } from 'src/app/classes/patient/payloads/doctor/accepted-appointment';
import { AllAppointments } from 'src/app/classes/patient/payloads/doctor/all-appointments';
import { Doctorresponse } from 'src/app/interface/doctorresponse';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080/api/doctor";

  signIn(doctorLogin: DoctorLoginDto): Observable<Doctorresponse> {
    return this.http.post<Doctorresponse>(`${this.baseUrl}/sign-in`, doctorLogin)
      .pipe(catchError(this.handleError));
  }


  profile(): Observable<DoctorList> {
    const headers=this.getAuthorizationHeader();

    return this.http.get<DoctorList>(`${this.baseUrl}/profile`, { headers })
      .pipe(catchError(this.handleError));

  }


  getAllApointmentsForDoctor(): Observable<AllAppointments> {
    const tokenD = localStorage.getItem('tokenD');
    const doctorId = sessionStorage.getItem('doctorId') ?? "";

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenD}`
    });

    return this.http.get<AllAppointments>(`${this.baseUrl}/${doctorId}`, { headers })
      .pipe(catchError(this.handleError))
  }

  getEmergencyAppointments(search: boolean): Observable<AllAppointments> {
    const tokenD = localStorage.getItem('tokenD');
    const doctorId = sessionStorage.getItem('doctorId') ?? "";

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenD}`
    });

    return this.http.get<AllAppointments>(`${this.baseUrl}/${doctorId}/${search}`, { headers })
      .pipe(catchError(this.handleError));
  }



  acceptApp(appointment: any): Observable<AcceptedAppointment> {
    const tokenD = localStorage.getItem('tokenD');
    const doctorId = sessionStorage.getItem('doctorId') ?? "";

    appointment.doctorId = doctorId;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenD}`
    });

    return this.http.post<AcceptedAppointment>(`${this.baseUrl}/acceptAppointments`, appointment, { headers })
      .pipe(catchError(this.handleError))
  }

  getAcceptApp(acceptId:string): Observable<AcceptedAppointment> {
   
    const doctorId = sessionStorage.getItem('doctorId') ?? "";

   const headers=this.getAuthorizationHeader();

    return this.http.get<AcceptedAppointment>(`${this.baseUrl}/accept-appointments/${doctorId}/${acceptId}`, { headers })
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

  getAuthorizationHeader(): HttpHeaders {
    const tokenD = localStorage.getItem('tokenD') ?? ''; // Fetch the token from localStorage

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenD}` // Set the Authorization header
    });

    return headers;
  }
}








