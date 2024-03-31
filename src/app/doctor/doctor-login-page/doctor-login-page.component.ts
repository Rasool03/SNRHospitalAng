import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-doctor-login-page',
  templateUrl: './doctor-login-page.component.html',
  styleUrls: ['./doctor-login-page.component.css']
})
export class DoctorLoginPageComponent implements OnInit {
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  constructor(private router:Router,private authService:AuthService,private toast: NgToastService) { }
  doctLoginForm=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  get UserName():FormControl{
    return this.doctLoginForm.get('userName') as FormControl;
  }
  get Password():FormControl{
    return this.doctLoginForm.get('password')as FormControl;
  }
  ngOnInit(): void {
  }
  hideShowPassword(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText?this.type="text":this.type="password";

  }
  onLogin(){
    if(this.doctLoginForm.valid){
      this.authService.doctorLogin(this.doctLoginForm.value).subscribe({
        next:(res)=>{
          this.authService.storeToken(res.token);
          this.toast.success({detail:"Success Message",summary:res.message,duration:5000})
          this.router.navigate(['doctorMainPage'])

        }
      })
    }

  }
  navigateDoctorMainPage(){
    this.router.navigate(['doctorMainPage'])
  }
}
