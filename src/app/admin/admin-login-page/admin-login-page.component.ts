import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {
type:string="password";
isText:boolean=false;
eyeIcon:string="fa-eye-slash";

  constructor(private router:Router, private fb:FormBuilder, private authService:AuthService,private toast:NgToastService) { }
  adminLoginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
get Email():FormControl{
  return this.adminLoginForm.get('email') as FormControl;
}
get Password():FormControl{
  return this.adminLoginForm.get('password') as FormControl;
}
  ngOnInit(): void {
  }
  navigateAdminProfile(){
    if(this.adminLoginForm.valid){
      this.authService.adminLogin(this.adminLoginForm.value).subscribe({
        next:(res)=>{
          this.authService.storeToken(res.token);
          this.toast.success({detail:"Success Message",summary:res.message,duration:5000})
          this.router.navigate(['adminInfo'])
          this.adminLoginForm.reset();
        },
        error:(err)=>{
          this.toast.error({detail:"Error Message",summary:'Login Fail Try Again',duration:5000})
          this.adminLoginForm.reset();
        }
      })
    }
    //
  }
  hideShowPassword(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText?this.type="text":this.type="password";
  }
}
