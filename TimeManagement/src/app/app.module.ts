import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeEntryComponent } from './time-entry/time-entry.component';
import { AddEditTimeComponent } from './time-entry/add-edit-time/add-edit-time.component';
import { TimelistComponent } from './time-entry/timelist/timelist.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import {NgbModule,} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TimeEntryComponent,
    AddEditTimeComponent,
    TimelistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgbModule,FormsModule,ReactiveFormsModule,HttpClientModule,AmazingTimePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
