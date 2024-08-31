import { Patient } from "../../patient";

export class AppointmentsForDoctor {
    appId!:string;
    date!:string;
    time!:string;
    reason!:string;
    emergency!:boolean;
    patientDto!:Patient
}
