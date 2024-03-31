import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { SerivesService } from 'src/app/service/serives.service';
import { DoctorsQuery } from '../Models/DoctorsQuery';


@Component({
  selector: 'app-admin-add-doctors',
  templateUrl: './admin-add-doctors.component.html',
  styleUrls: ['./admin-add-doctors.component.css']
})
export class AdminAddDoctorsComponent implements OnInit {
  panleExpanded=false;
  genderType:string[]=['Male','Female','Others']
  specialize:any;
  languageKnown:string[]=['Telugu','Hindi','English','Tamil']
  langs:string="Select Language";
  panleExpandedSchedul=false;
  sheduleWeeks:string[]=['Mon Day','Tues Day','Wed Day','Thurs Day','Fri Day','Sat Day','Sun Day']
  selectSchedule:any="Select Schedule"
  selectedWeeaks:any
  doctRegistrationForm:any;
  type:string="password";
  eyeIcon:string="fa-eye-slash";
  isText:boolean=false;
  types:string="password";
  eyeIcons:string="fa-eye-slash";
  isTexts:boolean=false;
  constructor(private fb:FormBuilder,private service:SerivesService, private toast:NgToastService) { 
    this.doctRegistrationForm=this.fb.group({
      doctName:['',Validators.required],
      dob:[''],
      gender:[''],
      specialization:['',Validators.required],
      experience:[''],
      languages:this.fb.array([]),
      language:[''],
      mobileNo:['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
      email:['',[Validators.required,Validators.email]],
      userName:['',Validators.required],
      password:['',Validators.required],
      conformPassword:['',Validators.required],
      schedules:this.fb.array([]),
      schedule:['',Validators.required],
      isActive:['']
    })
  }
  
  ngOnInit(): void {
    this.service.getAllDepartments().subscribe({
      next:(res=>{
        this.specialize=res;
      })
    })

  }
  get Name():FormControl{
    return this.doctRegistrationForm.get('doctName') as FormControl;
  }
  get Specialization():FormControl{
    return this.doctRegistrationForm.get('specialization') as FormControl;
  }
  get Email():FormControl{
    return this.doctRegistrationForm.get('email') as FormControl;
  }
  get MobileNo():FormControl{
    return this.doctRegistrationForm.get('mobileNo')as FormControl;
  }
  get UserName():FormControl{
    return this.doctRegistrationForm.get('userName') as FormControl;
  }
  get Password():FormControl{
    return this.doctRegistrationForm.get('password') as FormControl;
  }
  get conformPassword():FormControl{
    return this.doctRegistrationForm.get('conformPassword') as FormControl;
  }
  get schedules():FormControl{
    return this.doctRegistrationForm.get('schedules') as FormControl;
  }

  hideShowPassword(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText?this.type="text":this.type="password";

  }
  hideShowConformPassword(){
    this.isTexts=!this.isTexts;
    this.isTexts ? this.eyeIcons="fa-eye":this.eyeIcons="fa-eye-slash";
    this.isTexts?this.types="text":this.types="password";

  }
  handleSchedule(e:any){
    let scheArr=this.doctRegistrationForm.get('schedules') as FormArray
    if(e.target.checked){
      scheArr.push(new FormControl(e.target.value))
    }
    else{
      let i=0;
      scheArr.controls.forEach((s:any)=>{
        if(s.value==e.target.value){
          scheArr.removeAt(i);
          return
        }
        i++
      })
    }
    if(scheArr.value !='')
    {
      this.selectSchedule=scheArr.value
     
    }
    else{
      this.selectSchedule="Select Schedule"
    }
  }
  handleLanguages(e:any){
    let langArray=this.doctRegistrationForm.get('languages') as FormArray
    if(e.target.checked){
      langArray.push(new FormControl(e.target.value))
    }
    else{
      let i=0;
      langArray.controls.forEach((l:any)=>{
        if(l.value==e.target.value){
          langArray.removeAt(i);
          return
        }
        i++
      })
    }
    if(langArray.value !='')
    {
      this.langs=langArray.value
    }
    else{
      this.langs="Select Language"
    }
  }
   doctRegisterSubmit(){
    
    this.doctRegistrationForm.value.languages.forEach((data:any)=>{
  this.doctRegistrationForm.value.language +=data + ','; 
});
this.doctRegistrationForm.value.schedules.forEach((sch:any)=>{
  this.doctRegistrationForm.value.schedule +=sch+',';
})
let doctObj=new DoctorsQuery
doctObj.doctName=this.doctRegistrationForm.value.doctName;
doctObj.dob=this.doctRegistrationForm.value.dob;
doctObj.gender=this.doctRegistrationForm.value.gender;
doctObj.specialization=this.doctRegistrationForm.value.specialization;
doctObj.experience=this.doctRegistrationForm.value.experience;
doctObj.language=this.doctRegistrationForm.value.language;
doctObj.mobileNo=this.doctRegistrationForm.value.mobileNo;
doctObj.email=this.doctRegistrationForm.value.email;
doctObj.schedule=this.doctRegistrationForm.value.schedule;
doctObj.userName=this.doctRegistrationForm.value.userName;
doctObj.password=this.doctRegistrationForm.value.password;
doctObj.conformPassword=this.doctRegistrationForm.value.conformPassword;
doctObj.isActive=this.doctRegistrationForm.value.isActive;
this.service.registerDoctors(doctObj).subscribe({
  next:(res=>{
    this.toast.success({detail:"Success Message", summary:res.message, duration:5000})
    this.doctRegistrationForm.reset();
    this.panleExpanded=false;
    this.langs="Select Language"
    this.panleExpandedSchedul=false;
    this.selectSchedule="Select Schedule"
  }),
  error:(err=>{
    this.toast.error({detail:"Error Message",summary:err?.error.message, duration:5000})
  })
})
  }
  cancelForm(){
    this.doctRegistrationForm.reset();
    this.panleExpanded=false;
    this.langs="Select Language"
    this.panleExpandedSchedul=false;
    this.selectSchedule="Select Schedule"
  }
}
