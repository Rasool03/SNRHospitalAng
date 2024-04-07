import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SerivesService } from 'src/app/service/serives.service';

@Component({
  selector: 'app-patient-appoinment-status',
  templateUrl: './patient-appoinment-status.component.html',
  styleUrls: ['./patient-appoinment-status.component.css']
})
export class PatientAppoinmentStatusComponent implements OnInit {
patientId:any;
appointStatus:any
currentPage=1;
itemsPerPage=5;
  constructor(private serive:SerivesService,private authService:AuthService) { }

  ngOnInit(): void {
    this.patientId=this.authService.getptientId();
    this.getAppointemnts(this.patientId)
  }
  getAppointemnts(pId:number){
    this.serive.getAppointmentDetails(pId).subscribe({
      next:(data:any)=>{
        this.appointStatus=data
      }
    })
  }
  get totalItems():number{
    return this.appointStatus.length
  }
  get totalPages():number{
    return Math.ceil(this.totalItems/this.itemsPerPage);
  }
  get paginatedAppoint():any[]{
    const startIndex=(this.currentPage-1)*this.itemsPerPage;
    return this.appointStatus.slice(startIndex,startIndex+this.itemsPerPage);
  }
  onPageChange(page: number) {
    this.currentPage = page;
  }
}
