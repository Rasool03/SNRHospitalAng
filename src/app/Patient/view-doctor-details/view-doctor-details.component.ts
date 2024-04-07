import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SerivesService } from 'src/app/service/serives.service';

@Component({
  selector: 'app-view-doctor-details',
  templateUrl: './view-doctor-details.component.html',
  styleUrls: ['./view-doctor-details.component.css']
})
export class ViewDoctorDetailsComponent implements OnInit {
  departments: any;
  doctorsData: any;
  mergedData: any[] = [];
  currentPage=1;
  itemsPerPage=5;
  constructor(private authService: AuthService, private service: SerivesService) { }

  ngOnInit(): void {
    this.doctorsList();

  }

  doctorsList() {
    this.service.getDoctorList().subscribe({
      next: (data: any) => {
        this.doctorsData = data
      }

    })

  }
get totalItems():number{
  return this.doctorsData.length;
}
get totalPages():number{
  return Math.ceil(this.totalItems/this.itemsPerPage);
}
get paginatedDoctors():any[]{
  const startIndex=(this.currentPage-1) * this.itemsPerPage;
  return this.doctorsData.slice(startIndex,startIndex+this.itemsPerPage)
}
onPageChange(page: number) {
  this.currentPage = page;
}
}
