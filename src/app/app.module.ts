import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncomeComponent } from './COMPONENTS/income/income.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SpentComponent } from './COMPONENTS/spent/spent.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {ApiService} from "./SERVICE/api.service";
import { TableComponent } from './COMPONENTS/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    SpentComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
