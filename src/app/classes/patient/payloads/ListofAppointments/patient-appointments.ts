import { ListOfAppointmentsOfPatient } from "./list-of-appointments-of-patient";

export class PatientAppointments {
    firstName!:string;
    lastName!:string;
    email!:string;
    patientAppointmentsList:ListOfAppointmentsOfPatient[]=[];
}
