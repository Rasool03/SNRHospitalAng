import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-login-page',
  templateUrl: './hospital-login-page.component.html',
  styleUrls: ['./hospital-login-page.component.css']
})
export class HospitalLoginPageComponent implements OnInit {

  constructor(private router:Router) { }
  navigatePatientPage(){
    this.router.navigate(['PatientLogin'])

  }
  navigateDoctor(){
    this.router.navigate(['doctorLogin'])
  }
  navigateAdmin(){
   this.router.navigate(['adminLogin'])
  }
  ngOnInit(): void {
  }

}
