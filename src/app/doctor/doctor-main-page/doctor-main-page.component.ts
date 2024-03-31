import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DoctorProfileComponent } from '../doctor-profile/doctor-profile.component';
import { DoctorViewAppointmentsComponent } from '../doctor-view-appointments/doctor-view-appointments.component';
import { AddPrescriptionComponent } from '../add-prescription/add-prescription.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-doctor-main-page',
  templateUrl: './doctor-main-page.component.html',
  styleUrls: ['./doctor-main-page.component.css']
})
export class DoctorMainPageComponent implements OnInit {
  @ViewChild('container',{read:ViewContainerRef,static:true})
  container!:ViewContainerRef;
  constructor(private auth:AuthService) { }
  navigateDoctorProfile(){
    this.container.clear();
    this.container.createComponent(DoctorProfileComponent);
  }
  navigateDoctorAppointment(){
    this.container.clear();
    this.container.createComponent(DoctorViewAppointmentsComponent)
  }
  navigateAddPrescription(){
    this.container.clear();
    this.container.createComponent(AddPrescriptionComponent)
  }
  ngOnInit(): void {
    this.navigateDoctorProfile();
  }
  logOut(){
    this.auth.signOut();
  }
}
