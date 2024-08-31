export class CreateAppointment {

    appId!:string
    date!:string
    time!:string
    reason!:string
    emergency:boolean=false;
    patientId!:string
    doctorId!:string
}
