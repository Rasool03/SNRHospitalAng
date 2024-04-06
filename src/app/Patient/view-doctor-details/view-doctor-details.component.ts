import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SerivesService } from 'src/app/service/serives.service';

@Component({
  selector: 'app-view-doctor-details',
  templateUrl: './view-doctor-details.component.html',
  styleUrls: ['./view-doctor-details.component.css']
})
export class ViewDoctorDetailsComponent implements OnInit {
  departments:any;
  doctorsData:any;
  mergedData:any[]= [];
  constructor(private authService:AuthService,private service:SerivesService) { }

  ngOnInit(): void {
    this.getAllDepartments();
    this.doctorsList();
   
  }
  getAllDepartments(){
    this.authService.getAllDepartmentsList().subscribe({
      next:(data:any)=>{
        this.departments=data;
        console.log(12,this.departments)
      }
    })
    
  }
  doctorsList(){
    this.service.getDoctorList().subscribe({
      next:(data:any)=>{
this.doctorsData=data
console.log(123,this.doctorsData)
this.mergeData();
      }
      
    })
   
  }
  mergeData(){
    for(let depoartment of this.departments)
    {
      let doctor=this.doctorsData.find((d:any)=>d.specialization==depoartment.deptName);
      if(doctor){
        this.mergedData.push({
          deptName:depoartment.deptName,
          consultFee:depoartment.consultFee,
          doctName:doctor.doctName
        });
        console.log(333,this.mergedData)
      }
     
    }
  }
}
