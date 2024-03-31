import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-patient-login-page',
  templateUrl: './patient-login-page.component.html',
  styleUrls: ['./patient-login-page.component.css']
})
export class PatientLoginPageComponent implements OnInit {
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  PatientIdGet:any;
  constructor(private router:Router,private fb:FormBuilder, private authService:AuthService,private toast: NgToastService) { }
  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    mobileNo:new FormControl('',[Validators.required,Validators.pattern(/^\d{10}$/)])
  })
  get Email():FormControl{
    return this.loginForm.get('email') as FormControl;
  }
  get MobileNo():FormControl{
    return this.loginForm.get('mobileNo')as FormControl;
  }
  navigatePatientReg(){
    this.router.navigate(['PatientRegester'])
  }
  hideShowPassword(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText?this.type="text":this.type="password";

  }
  ngOnInit(): void {
  }
  onLogin(){
    if(this.loginForm.valid){
      this.authService.patientLogin(this.loginForm.value)
.subscribe({
  next:(res)=>{
    // alert(res.message)
    this.authService.storeToken(res.token);
    this.toast.success({detail:"Success Message",summary:res.message,duration:5000})
    this.authService.storePatientId(res.pId);
    this.router.navigate(['PatientInfo'])
    this.loginForm.reset();
  },
  error:(err)=>{
    this.toast.error({detail:"Error Message",summary:'Login Fail Try Again',duration:5000})
    this.loginForm.reset();
  }
})
    }
    else{
      // this.toast.warning({detail:"WARN",summary:'Form is not valid',duration:5000})
    }
  }

}
