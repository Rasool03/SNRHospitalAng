import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent implements OnInit {
  patientId:any="snt123"
  constructor() { }

  ngOnInit(): void {
  }

}
