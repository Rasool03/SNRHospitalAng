import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  patientId:any="Snr03"
  patientDetails:any;
  age: number=0;
  imagePath:any;
  constructor(private router:Router, private authService:AuthService) { }
  navigatePatientUpdate(){
    this.router.navigate(['patientUpdate']);
  }
  
  navigateBookAppoinment(){
    this.router.navigate(['patientBookAppointment']);
  }
  navigateAppoinmentStatus(){
    this.router.navigate(['appointmentStatus'])
  }
  navigateViewDoctors(){
    this.router.navigate(['viewDoctors'])
  }

  ngOnInit(): void {
    this.patientId=this.authService.getptientId();
    this.getPataientDetails(this.patientId)
  }
  getPataientDetails(id:number){
    this.authService.getPatientById(id).subscribe({
      next:(data)=>{
        this.patientDetails=data;
        this.imagePath=this.patientDetails.patientImgPath
         this.age = this.calculateAge(this.patientDetails.dob);
      }
    })
  }
   private calculateAge(dob: string): number {
      const birthDate = new Date(dob);
      const currentDate = new Date();
  
      let age = currentDate.getFullYear() - birthDate.getFullYear();
      const monthDiff = currentDate.getMonth() - birthDate.getMonth();
  
      if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
      }
  
      return age;
    }
}
