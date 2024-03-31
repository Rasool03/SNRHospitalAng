import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
panleExpanded=false;
panlePatientExpanded=false;
panleDepartmentExpanded=false;
panleDoctorExpanded=false;
showAdminEditForm=false;
genderType:any[]=['Male','Female','Others']
roleDetails:any[]=['Admin','Manager','Staff'];
adminId:any;
departmentList:any
types:string="password";
eyeIcons:string="fa-eye-slash";
isTexts:boolean=false;
editAdminForm=new FormGroup({
  name:new FormControl(''),
  dob:new FormControl(''),
  gender:new FormControl(''),
  email:new FormControl(''),
  mobileNo:new FormControl(''),
  address:new FormControl(''),
  role:new FormControl('')
})
  constructor(private authService:AuthService,private toast: NgToastService) { }
  adminList:any[]=[];
 
  ngOnInit(): void {
    this.getAllAdminRecords()
  }
getAllAdminRecords(){
  this.authService.getAllAdmins().subscribe({
    next:(data)=>{
      this.adminList=data;
    }
  })
}
deleteAdmin(id:any){
  if(confirm('Are you sure to Delete Record ?'))
  this.authService.deleteAdmin(id).subscribe({
    next:(data)=>{
      this.toast.success({detail:"Success Message", summary:'Record is Deleted..'})
      this.getAllAdminRecords();
    }
    
  })

}
openAdminEditForm(id:any){
  this.showAdminEditForm=true
  this.adminId=id
  this.authService.getAdminById(id).subscribe((result)=>{
    this.editAdminForm=new FormGroup({
      name:new FormControl(result['name']),
      dob:new FormControl(result['dob']),
      gender:new FormControl(result['gender']),
      email:new FormControl(result['email']),
      mobileNo:new FormControl(result['mobileNo']),
      address:new FormControl(result['address']),
      role:new FormControl(result['role'])
    })
  })
  
}
submitEditAdmin(){
  this.authService.updateAdmin(this.adminId,this.editAdminForm.value).subscribe(data=>{
    this.toast.success({detail:"Success Message", summary:'Record is Updated..'})
    this.showAdminEditForm=false
    this.getAllAdminRecords();
   
  })
}
hideShowPassword(){

  this.isTexts=!this.isTexts;
  this.isTexts ? this.eyeIcons="fa-eye":this.eyeIcons="fa-eye-slash";
  this.isTexts?this.types="text":this.types="password";
}
closeAdminEditForm(){
  this.showAdminEditForm=false
}
}
