
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ServiceWorkerModule } from '@angular/service-worker';

// import { MaterialModule } from '@angular/material';
import { environment } from '../environments/environment';

import { MatToolbarModule,
         MatMenuModule,
         MatIconModule,
         MatCardModule,
         MatButtonModule,
         MatTableModule,
         MatDividerModule,
         MatInputModule,
         MatFormFieldModule,
         MatProgressSpinnerModule } from '@angular/material';
import {MatNativeDateModule,MatCheckboxModule,MatRadioModule,MatListModule} from  '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LocalstorageService } from './services/localstorage.service';
import {ApiService} from './services/api.service';
import { DashboardComponent } from './dashboard/dashboard.component';


// import { FlexLayoutModule } from ‘@angular/flex-layout’;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DetailsComponent,
    HeaderComponent,
    RegistrationComponent,
    SidebarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatInputModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule
  ],
  providers: [LocalstorageService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
