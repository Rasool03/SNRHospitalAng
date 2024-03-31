import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {
  patientId:any="snr123";
  constructor() { }

  ngOnInit(): void {
  }

}
