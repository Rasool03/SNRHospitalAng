import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalLoginPageComponent } from './hospital-login-page/hospital-login-page.component';
import { PatientLoginPageComponent } from './Patient/patient-login-page/patient-login-page.component';
import { PatientRegistrationComponent } from './Patient/patient-registration/patient-registration.component';
import { PatientInfoPageComponent } from './Patient/patient-info-page/patient-info-page.component';
import { AuthGuard } from './guards/auth.guard';
import { PaymentComponent } from './Patient/payment/payment.component';
import { BillRecipetComponent } from './Patient/bill-recipet/bill-recipet.component';
import { DoctorLoginPageComponent } from './doctor/doctor-login-page/doctor-login-page.component';
import { AdminLoginPageComponent } from './admin/admin-login-page/admin-login-page.component';
import { AdminInfoPageComponent } from './admin/admin-info-page/admin-info-page.component';
import { DoctorMainPageComponent } from './doctor/doctor-main-page/doctor-main-page.component';
import { AdminRegisterPageComponent } from './admin/admin-register-page/admin-register-page.component';

const routes: Routes = [
  {path:'', component:HospitalLoginPageComponent},
  {path:'PatientLogin', component:PatientLoginPageComponent},
  {path:'PatientRegester', component:PatientRegistrationComponent},
  {path:'PatientInfo', component:PatientInfoPageComponent, canActivate:[AuthGuard]},
  {path:'Payment', component:PaymentComponent},
  {path:'billDetails', component:BillRecipetComponent},
  {path:'doctorLogin', component:DoctorLoginPageComponent},
  {path:'adminLogin', component:AdminLoginPageComponent},
  {path:'adminInfo', component:AdminInfoPageComponent,canActivate:[AuthGuard]},
  {path:'adminRegister', component:AdminRegisterPageComponent},
  {path:'doctorLoginPage', component:DoctorLoginPageComponent},
  {path:'doctorMainPage', component:DoctorMainPageComponent, canActivate:[AuthGuard]},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
