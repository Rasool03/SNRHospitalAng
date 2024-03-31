import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departmentList:any
  formHeader:any
  showForm=false;
  deptOperation:any
  deptIdRecive:any
  isEditMode: boolean = false;
  editDeptId: number | null = null;
  currentPage=1;
  itemsPerPage=5;
  searchtext:any
  deptForm=new FormGroup({
    deptName:new FormControl(''),
    consultFee:new FormControl('')
  })
  constructor(private authService:AuthService, private toast:NgToastService) { }

  ngOnInit(): void {
    this.getAllDepartments()
  }
  getAllDepartments(){
    this.authService.getAllDepartmentsList().subscribe({
      next:(data)=>{
        this.departmentList=data
      }
    })
  }
  openDeptForm(id=null){
    this.showForm=true;
    if(id)
    {
      this.formHeader="Edit Department"
      this.isEditMode=true
      this.editDeptId=id
      this.authService.getDeptById(id).subscribe((result)=>{
        this.deptForm=new FormGroup({
          deptName:new FormControl(result['deptName']),
          consultFee:new FormControl(result['consultFee'])
        })
      })

    }
    else{
      this.formHeader="Add Department"
    }
  }
  saveDeprtForm(){
    if(this.isEditMode)
    {
      this.authService.editDepartment(this.editDeptId,this.deptForm.value).subscribe({
        next:(res=>{
          this.toast.success({detail:"Success Message",summary:'Record is Updated..', duration:5000})
          this.showForm=false;
          this.getAllDepartments()
          this.deptForm.reset();
        }),
        error:(err=>{
          this.toast.error({detail:"Error Message",summary:err?.error.message, duration:5000})
        })
      })
    }
    else{
      this.authService.createDepartment(this.deptForm.value).subscribe({
        next:(res=>{
          this.toast.success({detail:"Success Message",summary:res.message, duration:5000})
          this.showForm=false;
          this.deptForm.reset();
          this.getAllDepartments();
        })
      })
    }
    
  }
deleteDepartment(id:any){
  if(confirm('Are you sure to Delete Record ?.'))
  this.authService.deleteDepartment(id).subscribe(data=>{
    this.toast.success({detail:"Success Message",summary:'Record is Deleted..', duration:5000})
    this.getAllDepartments()
  })
}
  cancle(){
    this.showForm=false;
    this.deptForm.reset();
  }
  get totalItems(): number {
    return this.departmentList.length;
  }
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
  get paginatedDepartments(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.departmentList.slice(startIndex, startIndex + this.itemsPerPage);
  }
  onPageChange(page: number) {
    this.currentPage = page;
  }
  filterSearch(){
   this.authService.filterDepartment(this.searchtext).subscribe({
    next:(data)=>{
      this.departmentList=data
    }
   }
   )
  }
}
