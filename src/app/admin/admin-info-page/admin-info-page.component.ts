import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AdminAddDoctorsComponent } from '../admin-add-doctors/admin-add-doctors.component';
import { AdminPaymentRequestComponent } from '../admin-payment-request/admin-payment-request.component';
import { AdminUpdateDoctorsComponent } from '../admin-update-doctors/admin-update-doctors.component';
import { AdminViewRecordsComponent } from '../admin-view-records/admin-view-records.component';
import { AdminProfileComponent } from '../admin-profile/admin-profile.component';
import { AuthService } from 'src/app/service/auth.service';
import { DepartmentComponent } from '../department/department.component';
import { PatientDetailsComponent } from '../patient-details/patient-details.component';
import { SerivesService } from 'src/app/service/serives.service';

@Component({
  selector: 'app-admin-info-page',
  templateUrl: './admin-info-page.component.html',
  styleUrls: ['./admin-info-page.component.css']
})
export class AdminInfoPageComponent implements OnInit {
  @ViewChild('container',{read:ViewContainerRef,static:true})
  container!:ViewContainerRef;
  showInfo=true
  getDoctorsActive:any
  getDoctorsInActive:any
  constructor(private auth:AuthService,private service:SerivesService) { }
  ngOnInit(): void {
    this.getDeoctrsData()
  }
  navigateAddDoctor(){
    this.container.clear();
    this.showInfo=false
    this.container.createComponent(AdminAddDoctorsComponent)
  }
  navigatePaymentRequest(){
    this.container.clear();
    this.showInfo=false
    this.container.createComponent(AdminPaymentRequestComponent)
  }
  navigateEditDoctor(){
    this.container.clear();
    this.showInfo=false
    this.container.createComponent(AdminUpdateDoctorsComponent)
  }
  navigateDepartment(){
    this.container.clear();
    this.showInfo=false
    this.container.createComponent(DepartmentComponent)
  }
  navigateRecords(){
    this.container.clear();
    this.showInfo=false
    this.container.createComponent(AdminViewRecordsComponent)
  }
  navigateAdminProfile(){
    this.container.clear();
    this.showInfo=false
    this.container.createComponent(AdminProfileComponent)
  }
  navigatePatientDetails(){
    this.container.clear();
    this.showInfo=false
    this.container.createComponent(PatientDetailsComponent)
  }
  getDeoctrsData(){
    this.service.getDoctorList().subscribe((res:any)=>{
      this.getDoctorsInActive=res.filter((doct:any)=>!doct.isActive)
      this.getDoctorsActive=res.filter((dot:any)=>dot.isActive)
     
    })
  }
 
  logOut(){
    this.auth.adminSignOut();
    }
}
