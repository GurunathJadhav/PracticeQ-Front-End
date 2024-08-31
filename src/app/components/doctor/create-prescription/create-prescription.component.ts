import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent {

  constructor(){}

  ngOnInIt(){

  }
 

   prescription={

    patientId:"",
    doctorId:"",
    duration:"",
    medicines:[],


  }

  
}
