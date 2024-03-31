import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-register-page',
  templateUrl: './admin-register-page.component.html',
  styleUrls: ['./admin-register-page.component.css']
})
export class AdminRegisterPageComponent implements OnInit {
genderType:string[]=['Male','Female','Others']
roleDetails:string[]=['Admin','Manager','Ast.Manager']
type:string="password";
isText:boolean=false;
eyeIcon:string="fa-eye-slash";
  constructor(private router:Router,private authService:AuthService, private toast:NgToastService) { }
  adminRegisterForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    dob:new FormControl(''),
    gender:new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobileNo:new FormControl('',[Validators.required,Validators.pattern(/^\d{10}$/)]),
    address:new FormControl(''),
    password:new FormControl('',[Validators.required]),
    role:new FormControl('',[Validators.required])
  })

  get Name():FormControl{
    return this.adminRegisterForm.get('name') as FormControl;
  }
  get Email():FormControl{
    return this.adminRegisterForm.get('email') as FormControl;
  }
  get MobileNo():FormControl{
    return this.adminRegisterForm.get('mobileNo')as FormControl;
  }
  get Role():FormControl{
    return this.adminRegisterForm.get('role') as FormControl;
  }
  ngOnInit(): void {
  }
  hideShowPassword(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText?this.type="text":this.type="password";

  }
adminRegisterSubmit(){
  if(this.adminRegisterForm.valid)
  {
    this.authService.registerAdmin(this.adminRegisterForm.value).subscribe({
      next:(res=>{
        this.toast.success({detail:"Success Message",summary:res.message, duration:5000})
        this.router.navigate(['adminLogin'])
        this.adminRegisterForm.reset();
      }),
      error:(err=>{
        this.toast.error({detail:"Error Message",summary:err?.error.message, duration:5000})
      })
    })
  }

}
cancle(){
  this.adminRegisterForm.reset();
  this.router.navigate(['adminLogin'])
}
}
