import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  //<<<< import it here
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgChartDemoComponent } from './ng-chart-demo/ng-chart-demo.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form', component: FormComponent },
  { path: 'ng2-chart', component: NgChartDemoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DashboardComponent,
    ChartComponent,
    NgChartDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,    
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
