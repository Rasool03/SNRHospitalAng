import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
patientList:any
currentPage = 1;
itemsPerPage = 5;
searchtext:any
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.getAllPatientsDetails()
  }
getAllPatientsDetails(){
  this.authService.getAllPatientsList().subscribe(data=>{
    this.patientList=data

  })

}
get totalItems(): number {
  return this.patientList.length;
}
get totalPages(): number {
  return Math.ceil(this.totalItems / this.itemsPerPage);
}
get paginatedPatients(): any[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  return this.patientList.slice(startIndex, startIndex + this.itemsPerPage);
}
onPageChange(page: number) {
  this.currentPage = page;
}
searchPatient(){
  this.authService.filterPatient(this.searchtext).subscribe({
    next:(data)=>{
      this.patientList=data
    }
  })
}
}
