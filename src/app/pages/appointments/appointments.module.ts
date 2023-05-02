import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';

import { AppointmentsComponent } from './appointments.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from 'src/app/shared/pipe/date-format.pipe'




@NgModule({
  declarations: [
    AppointmentsComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers:[DatePipe,DateFormatPipe]
})
export class AppointmentsModule { }
