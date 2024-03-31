import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SerivesService } from 'src/app/service/serives.service';

@Component({
  selector: 'app-admin-view-records',
  templateUrl: './admin-view-records.component.html',
  styleUrls: ['./admin-view-records.component.css']
})
export class AdminViewRecordsComponent implements OnInit {
  recordOptions:string[]=['Yearly','Monthly']
  years:string[]=['2023','2022','2021','2020']
  months:string[]=['JAN','FEB','MARCH','APRIL','MAY','JUNE','JULY','AUG','SEP','OCT','NOV','DEC']
  departmentList:any
  patientLists:any
  doctorsList:any
  constructor(private auth:AuthService,private service:SerivesService) { }

  ngOnInit(): void {
    this.getAllDepartment();
    this.getTotalPatients();
    this.getDoctorsDetails();
  }
getAllDepartment(){
  this.auth.getAllDepartmentsList().subscribe((res:any)=>{
this.departmentList=res.length

  })

}
getTotalPatients(){
  this.auth.getAllPatientsList().subscribe((res:any)=>{
    this.patientLists=res.length
  })
}
getDoctorsDetails(){
  this.service.getDoctorList().subscribe((res:any)=>{
this.doctorsList=res.length
  })
}
}
