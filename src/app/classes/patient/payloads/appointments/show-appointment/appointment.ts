import { Patient } from "../../../patient";
import { DoctorList } from "../../doctor-list";

export class Appointment {
    appId!:string;
    date!:string;
    time!:string;
    reason!:string;
    emergency!:string;
    doctor!:DoctorList;
    patient!:Patient
}
