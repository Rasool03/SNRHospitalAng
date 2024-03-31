import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {
  genderSex:string[]=['Male','Female','Others']
  bldGroup:string[]=['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  pvtOrGvt:string[]=['PRIVATE','CGHS']
  selectedFile:any;
  constructor(private router:Router, private authService:AuthService,private toast: NgToastService) { }
  registerForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    dob:new FormControl(''),
    gender:new FormControl(''),
    bloodGroup:new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobileNo:new FormControl('',[Validators.required,Validators.pattern(/^\d{10}$/)]),
    address:new FormControl(''),
    cghsprivate:new FormControl(''),
    patientImgPath:new FormControl('')   
  });
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
    this.registerForm.patchValue({
      patientImgPath:this.selectedFile.name
    });
  }

get Name():FormControl{
  return this.registerForm.get('name') as FormControl;
}
  get Email():FormControl{
    return this.registerForm.get('email') as FormControl;
  }
  get MobileNo():FormControl{
    return this.registerForm.get('mobileNo')as FormControl;
  }

  
  registerSubmited(){
    if(this.registerForm.valid)
    {
      this.authService.registerPatient(this.registerForm.value).subscribe({
        next:(res=>{
          this.toast.success({detail:"Success Message",summary:res.message,duration:5000})
          this.router.navigate(['PatientLogin'])
          this.registerForm.reset();
        }),
        error:(err=>{
          this.toast.error({detail:"Error Message",summary:'Registration Fail Try Again',duration:5000})
        })
      })
    }
    else{
      // this.toast.warning({detail:"WARN",summary:'Details not match',duration:5000})
    }
   
  }
  cancleRester(){   
      this.registerForm.reset();  
      this.router.navigate(['PatientLogin'])  
   
  }
  ngOnInit(): void {
  }

}
