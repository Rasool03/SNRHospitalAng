import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { PaymentHistoryComponent } from '../payment-history/payment-history.component';
import { ViewDoctorDetailsComponent } from '../view-doctor-details/view-doctor-details.component';
import { PatientUpdateComponent } from '../patient-update/patient-update.component';
import { PatientAppoinmentStatusComponent } from '../patient-appoinment-status/patient-appoinment-status.component';
import { PatientBookAppointmentComponent } from '../patient-book-appointment/patient-book-appointment.component';
import { PatientProfileComponent } from '../patient-profile/patient-profile.component';

@Component({
  selector: 'app-patient-info-page',
  templateUrl: './patient-info-page.component.html',
  styleUrls: ['./patient-info-page.component.css']
})
export class PatientInfoPageComponent implements OnInit {
  @ViewChild('container',{read:ViewContainerRef,static:true})
   container!:ViewContainerRef;
  constructor(private router:Router,private auth:AuthService) { }
  createComponent(){
    this.container.clear();
    this.container.createComponent(PatientProfileComponent)
  }
  BookAppointment(){
    this.container.clear();
    this.container.createComponent(PatientBookAppointmentComponent)
  }
  appointmentStatus(){
    this.container.clear();
    this.container.createComponent(PatientAppoinmentStatusComponent)
  }
  updateDetails(){
    this.container.clear();
   this.container.createComponent(PatientUpdateComponent)
  }
  viewDoctor(){
    this.container.clear();
    this.container.createComponent(ViewDoctorDetailsComponent)
  }
  receiptPayment(){
    this.container.clear();
    this.container.createComponent(PaymentHistoryComponent)
  }
  
    navigatePatientInfo(){
      this.router.navigate(['patientProfile'])
    }
    navigatePatientUpdate(){
      this.router.navigate(['patientUpdate']);
    }
    navigateBookAppoinment(){
      this.router.navigate(['patientBookAppointment']);
    }
  
  ngOnInit(): void {
    this.createComponent();
  }
  logOut(){
    this.auth.signOut();
    }
}
