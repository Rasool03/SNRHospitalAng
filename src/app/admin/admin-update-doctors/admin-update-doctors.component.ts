import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { SerivesService } from 'src/app/service/serives.service';

@Component({
  selector: 'app-admin-update-doctors',
  templateUrl: './admin-update-doctors.component.html',
  styleUrls: ['./admin-update-doctors.component.css']
})
export class AdminUpdateDoctorsComponent implements OnInit {
  doctorId:any="snr123"
  doctorsList:any;
  currentPage=1;
  itemsPerPage=5;
  searchtext:any;
  constructor(private service:SerivesService,private toast:NgToastService) { }

  ngOnInit(): void {
  this.getAllDoctors()
  }
  getAllDoctors(){
    this.service.getDoctorList().subscribe({
      next:(res=>{
        this.doctorsList=res; 
        console.log(121,this.doctorsList.length)
       })
    })
  }
get totalItems():number{
  return this.doctorsList.length;
}
get totalPages():number{
  return Math.ceil(this.totalItems/this.itemsPerPage);
}
get paginatedDoctors():any[]{
  const startIndex=(this.currentPage-1)*this.itemsPerPage;
  return this.doctorsList.slice(startIndex,startIndex+this.itemsPerPage);
}
onPageChange(page: number) {
  this.currentPage = page;
}
toggleActive(data:any){
  data.isActive=!data.isActive
  let objPatch=[{
    "path":"isActive",
    "op":"replace",
    "value":data.isActive
  }]
  this.service.updateDoctorActive(data.doctId,objPatch).subscribe({
    next:(res=>{
      this.toast.success({detail:"Success Message",summary:"Success Update IsActive", duration:5000})
    })
  })
}
deleteDoctorRecord(id:any){
  if(confirm('Are you sure to Delete Record ?.'))
  this.service.deleteDoctor(id).subscribe(data=>{
this.toast.success({detail:"Success Message",summary:'Record is deleted', duration:5000})
this.getAllDoctors()
  })
}
filterSearch(){
  this.service.filterDoctors(this.searchtext).subscribe({
    next:(data)=>{
      this.doctorsList=data;
    }
  })
}
}
