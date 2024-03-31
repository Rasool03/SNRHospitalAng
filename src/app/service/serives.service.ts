import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SerivesService {
private baseUrl:string="http://localhost:5022/api/"
  constructor(private http:HttpClient,private router:Router) { }
  getAllDepartments(){
    return this.http.get<any>(`${this.baseUrl}Department`)
  }
  registerDoctors(data:any){
    return this.http.post<any>(`${this.baseUrl}Doctor/DoctorRegistration`,data)
  }
  getDoctorList(){
    return this.http.get<any>(`${this.baseUrl}Doctor`)
  }
  updateDoctorActive(id:any,data:any){
    return this.http.patch<any>(`${this.baseUrl}Doctor/${id}`,data);
  }
  deleteDoctor(id:any){
    return this.http.delete(`${this.baseUrl}Doctor/${id}`)
  }
  filterDoctors(data:any){
    let params=new HttpParams();
    params=params.append('search',data);
    return this.http.get<any>(`${this.baseUrl}Doctor`,{params})
  }
  creteAppointments(data:any){
    return this.http.post<any>(`${this.baseUrl}Appointment/Create`,data)
  }
}
