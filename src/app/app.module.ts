import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientLoginPageComponent } from './Patient/patient-login-page/patient-login-page.component';
import { HospitalLoginPageComponent } from './hospital-login-page/hospital-login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientRegistrationComponent } from './Patient/patient-registration/patient-registration.component';
import { PatientInfoPageComponent } from './Patient/patient-info-page/patient-info-page.component';
import { PatientProfileComponent } from './Patient/patient-profile/patient-profile.component';
import { BillRecipetComponent } from './Patient/bill-recipet/bill-recipet.component';
import { PatientAppoinmentStatusComponent } from './Patient/patient-appoinment-status/patient-appoinment-status.component';
import { PatientBookAppointmentComponent } from './Patient/patient-book-appointment/patient-book-appointment.component';
import { PatientUpdateComponent } from './Patient/patient-update/patient-update.component';
import { ViewDoctorDetailsComponent } from './Patient/view-doctor-details/view-doctor-details.component';
import { PaymentHistoryComponent } from './Patient/payment-history/payment-history.component';
import { PatientCancleAppointmentComponent } from './Patient/patient-cancle-appointment/patient-cancle-appointment.component';
import { PaymentComponent } from './Patient/payment/payment.component';
import { AdminAddDoctorsComponent } from './admin/admin-add-doctors/admin-add-doctors.component';
import { AdminInfoPageComponent } from './admin/admin-info-page/admin-info-page.component';
import { AdminLoginPageComponent } from './admin/admin-login-page/admin-login-page.component';
import { AdminPaymentRequestComponent } from './admin/admin-payment-request/admin-payment-request.component';
import { AdminUpdateDoctorsComponent } from './admin/admin-update-doctors/admin-update-doctors.component';
import { AdminViewRecordsComponent } from './admin/admin-view-records/admin-view-records.component';
import { AddPrescriptionComponent } from './doctor/add-prescription/add-prescription.component';
import { DoctorLoginPageComponent } from './doctor/doctor-login-page/doctor-login-page.component';
import { DoctorMainPageComponent } from './doctor/doctor-main-page/doctor-main-page.component';
import { DoctorProfileComponent } from './doctor/doctor-profile/doctor-profile.component';
import { DoctorViewAppointmentsComponent } from './doctor/doctor-view-appointments/doctor-view-appointments.component';
import { NgToastModule } from 'ng-angular-popup';
import { AdminRegisterPageComponent } from './admin/admin-register-page/admin-register-page.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminEditComponent } from './admin/admin-profile/admin-edit/admin-edit.component';
import { DepartmentComponent } from './admin/department/department.component';
import { PatientDetailsComponent } from './admin/patient-details/patient-details.component';
import { PaginationComponent } from './service/pagination/pagination.component';
import { FilterPipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    PatientLoginPageComponent,
    HospitalLoginPageComponent,
    PatientRegistrationComponent,
    PatientInfoPageComponent,
    PatientProfileComponent,
    BillRecipetComponent,
    PatientAppoinmentStatusComponent,
    PatientBookAppointmentComponent,
    PatientUpdateComponent,
    ViewDoctorDetailsComponent,
    PaymentHistoryComponent,
    PatientCancleAppointmentComponent,
    PaymentComponent,
    AdminAddDoctorsComponent,
    AdminInfoPageComponent,
    AdminLoginPageComponent,
    AdminPaymentRequestComponent,
    AdminUpdateDoctorsComponent,
    AdminViewRecordsComponent,
    AddPrescriptionComponent,
    DoctorLoginPageComponent,
    DoctorMainPageComponent,
    DoctorProfileComponent,
    DoctorViewAppointmentsComponent,
    AdminRegisterPageComponent,
    AdminProfileComponent,
    AdminEditComponent,
    DepartmentComponent,
    PatientDetailsComponent,
    PaginationComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
