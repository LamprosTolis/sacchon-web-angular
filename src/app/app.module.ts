import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-account/login/login.component';
import { RegisterComponent } from './user-account/register/register.component';
import { HomeComponent } from './home/home.component';
import { MeasurementListComponent } from './patient/measurement-list/measurement-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { MeasurementAddComponent } from './patient/measurement-add/measurement-add.component';
import { HeaderComponent } from './_shared/_components/header/header.component';
import { ConsultListComponent } from './patient/consult-list/consult-list.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './_shared/_components/footer/footer.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AdminComponent } from './admin/admin.component';
import { ConsultAddComponent } from './doctor/consult-add/consult-add.component';
import { ActivePatientsComponent } from './doctor/active-patients-list/active-patients.component';
import { MeasurementEditComponent } from './patient/measurement-edit/measurement-edit.component';
import { PatientModule } from './patient/patient.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientsDetailComponent } from './doctor/patients-detail/patients-detail.component';
import { MyPatientsListComponent } from './doctor/my-patients-list/my-patients-list.component';
import { DoctorModule } from './doctor/doctor.module';
import { PatientConsultListComponent } from './doctor/patient-consult-list/patient-consult-list.component';
import { ConsultEditComponent } from './doctor/consult-edit/consult-edit.component';
import { PatientListComponent } from './admin/patient-list/patient-list.component';
import { PatientDetailComponent } from './admin/patient-detail/patient-detail.component';
import { DoctorListComponent } from './admin/doctor-list/doctor-list.component';
import { DoctorDetailComponent } from './admin/doctor-detail/doctor-detail.component';
import { AdminModule } from './admin/admin.module';
import { ConsultHistoryListComponent } from './doctor/consult-history-list/consult-history-list.component';
import { UserPanelComponent } from './_shared/_components/user-panel/user-panel.component';
import { PageNotFoundComponent } from './_shared/_components/page-not-found/page-not-found.component';
import { InternalServerErrorComponent } from './_shared/_components/internal-server-error/internal-server-error.component';
import { UnauthorizedClientErrorComponent } from './_shared/_components/unauthorized-client-error/unauthorized-client-error.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '500', component: InternalServerErrorComponent },
  { path: '401', component: UnauthorizedClientErrorComponent },

  {
    path: 'patient',
    component: PatientComponent,
    children: [
      { path: 'measurements', component: MeasurementListComponent },
      { path: 'measurements/create', component: MeasurementAddComponent },
      { path: 'measurements/:id', component: MeasurementEditComponent },
      { path: 'consult', component: ConsultListComponent },
      { path: 'user-panel', component: UserPanelComponent },
    ],
  },
  {
    path: 'doctor',
    component: DoctorComponent,
    children: [
      // { path: '', component: DoctorComponent },
      // { path: 'my-patients', component: DoctorComponent },
      { path: 'patients-without-doctor', component: ActivePatientsComponent },
      { path: 'my-patients', component: MyPatientsListComponent },
      { path: 'consults', component: ConsultHistoryListComponent },
      { path: 'consults/create', component: ConsultAddComponent },
      { path: 'consults/:id', component: ConsultListComponent },
      { path: 'consults/:id/edit', component: ConsultListComponent },
      {
        path: 'patients-without-doctor/:email',
        component: PatientsDetailComponent,
      },
      { path: 'my-patients/:email', component: PatientsDetailComponent },
      {
        path: 'my-patients/consult/:email',
        component: PatientConsultListComponent,
      },
      {
        path: 'my-patients/consult/:email/:id',
        component: ConsultEditComponent,
      },
      { path: 'user-panel', component: UserPanelComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      // { path: '', component: DoctorComponent },
      { path: 'patient-list', component: PatientListComponent },
      { path: 'patient-list/:email', component: PatientDetailComponent },
      { path: 'doctor-list', component: DoctorListComponent },
      { path: 'doctor-list/:email', component: DoctorDetailComponent },
      { path: 'doctor-data', component: ConsultListComponent },
      { path: 'patients-without-doctor', component: ConsultListComponent },
      { path: 'consults', component: ConsultListComponent },
      { path: 'user-panel', component: UserPanelComponent },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: '**', redirectTo: '404' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ConsultHistoryListComponent,
    UserPanelComponent,
    InternalServerErrorComponent,
  ],
  imports: [
    CommonModule,
    AdminModule,
    PatientModule,
    DoctorModule,
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GoogleChartsModule,
    RouterModule.forRoot(routes),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
