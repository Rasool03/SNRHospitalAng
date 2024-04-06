import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/service/auth.service';
import { SerivesService } from 'src/app/service/serives.service';

@Component({
  selector: 'app-patient-book-appointment',
  templateUrl: './patient-book-appointment.component.html',
  styleUrls: ['./patient-book-appointment.component.css']
})
export class PatientBookAppointmentComponent implements OnInit {
patientId:any;
departments:any;
doctorList:any
appointmentForm:any
deptFeeList:any
detFee:any
consultantFeeValue:any;
showForm=false;
confimAppDetails:any
  constructor(private fb:FormBuilder,private router:Router,private authService:AuthService,private service:SerivesService,private toast:NgToastService) {
this.appointmentForm=this.fb.group({
  pId:this.patientId,
  specialization:['',Validators.required],
  doctorName:[''],
  consultantFee:[''],
  date:['',Validators.required],
  time:[''],
  paymentMethod:['',Validators.required],
  mobileNo:['',Validators.required]
})
   }

  ngOnInit(): void {
    this.patientId=this.authService.getptientId();
   this.getAllDepartments();
  }
  navigatePayment(){
    this.router.navigate(['Payment'])
  }
  getAllDepartments(){
    this.authService.getAllDepartmentsList().subscribe({
      next:(data:any)=>{
        this.departments=data;
      }
    })
    
  }
  selectDept(data:any){
    this.getDoctors(data);
  }
  onDepartmentSelected(data:any){
    this.getDoctors(data.target.value)
    this.deptFeeList=this.departments.filter((dept:any)=>dept.deptName==data.target.value)
    this.deptFeeList.forEach((a:any) => {
      this.detFee=a.consultFee
      
    });
    this.consultantFeeValue=this.detFee
  }
  getDoctors(data:any){
    this.service.filterDoctors(data).subscribe({
      next:(data:any)=>{
        this.doctorList=data
      }
    })
  }
  saveAppoint(){
    if(this.appointmentForm.valid)
      {        
        this.appointmentForm.value.pId=this.patientId
        this.appointmentForm.value.consultantFee=this.consultantFeeValue
        this.confimAppDetails=this.appointmentForm.value
        this.service.creteAppointments(this.appointmentForm.value).subscribe({
          next:(data:any)=>{
            this.toast.success({detail:"Success Message",summary:'Record is Created..',duration:5000})
            this.appointmentForm.reset();
            this.showForm=false;
    
          }
        })
      }
  
  }
  cancleApp(){
    this.appointmentForm.reset();
    this.showForm=false;
  }
  openPayment(){
    this.showForm=true;
    this.appointmentForm.value.consultantFee=this.consultantFeeValue
    this.confimAppDetails=this.appointmentForm.value
  }
}
