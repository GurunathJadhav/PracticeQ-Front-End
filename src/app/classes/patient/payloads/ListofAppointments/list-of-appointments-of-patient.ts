import { DoctorList } from "../doctor-list";

export class ListOfAppointmentsOfPatient {
    appId!:string;
    date!:string;
    time!:String;
    reason!:string;
    emergency!:boolean;
    doctor!:DoctorList;
    
}
