import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string="http://localhost:5022/api/Patient/"

  private adminUrl:string="http://localhost:5022/api/Admin/"
  constructor(private http:HttpClient, private router:Router) { }
  registerPatient(patientObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,patientObj);
   }
 
   patientLogin(loginObj:any){
     return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)
   }
   adminLogin(adminLoginObj:any){
    return this.http.post<any>(`${this.adminUrl}authenticate`,adminLoginObj)
   }
   doctorLogin(doctLoginObj:any){
    return this.http.post<any>(`http://localhost:5022/api/Doctor/Authentication`,doctLoginObj)
   }
   getAllAdmins(){
    return this.http.get<any>(`http://localhost:5022/api/Admin`)
   }
   deleteAdmin(id:any){
    return this.http.delete(`http://localhost:5022/api/Admin/${id}`)
   }
   getAdminById(id:any){
    return this.http.get<any>(`http://localhost:5022/api/Admin/GetById/${id}`)
   }
   updateAdmin(id:any,data:any){
    return this.http.put(`http://localhost:5022/api/Admin/Edit/${id}`,data)
   }
   getAllDepartmentsList(){
    return this.http.get<any>(`http://localhost:5022/api/Department`)
   }
   filterDepartment(data:any){
    let params=new HttpParams();
    params=params.append('search',data);
    return this.http.get<any>(`http://localhost:5022/api/Department`,{params})
   }
   
   getDeptById(id:any){
    return this.http.get<any>(`http://localhost:5022/api/Department/${id}`)
   }
   createDepartment(data:any){
    return this.http.post<any>(`http://localhost:5022/api/Department/Create`,data)
   }
   editDepartment(id:any,data:any){
    return this.http.put<any>(`http://localhost:5022/api/Department/Update/${id}`,data)
   }
   deleteDepartment(id:any){
    return this.http.delete(`http://localhost:5022/api/Department/${id}`)
   }
   getAllPatientsList(){
    return this.http.get<any>(`http://localhost:5022/api/Patient`)
   }
   filterPatient(data:any){
    let params=new HttpParams();
    params=params.append('search',data);
    return this.http.get<any>(`http://localhost:5022/api/Patient`,{params})    
   }
 signOut(){
   localStorage.clear();
   this.router.navigate(['PatientLogin'])
 }
 adminSignOut(){
  localStorage.clear();
  this.router.navigate(['adminLogin'])
 }
 doctorSignOut(){
  localStorage.clear();
  this.router.navigate(['doctorLoginPage'])
 }
   storeToken(tokenValue:string){
     localStorage.setItem('token',tokenValue)
   }
 storePatientId(patientId:any){
   localStorage.setItem('pId',patientId)
 }
   getToken(){
     return localStorage.getItem('token')
   }
   getptientId(){
     return localStorage.getItem('pId')
   }
 
   isLoggedIn():boolean{
     return !!localStorage.getItem('token')
   }
 
   getPatientById(id:any){
     return this.http.get(`http://localhost:5022/api/Patient/${id}`)
   }
   registerAdmin(adminObj:any){
    return this.http.post<any>(`${this.adminUrl}register`,adminObj)
   }
   registerDoctor(doctObj:any){
    return this.http.post<any>(`http://localhost:5022/api/Doctor/DoctorRegistration`,doctObj)
   }
}
