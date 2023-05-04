import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Appointment } from '../../shared/models/Appointment';
import { AppointmentService } from '../../shared/services/appointment.service';
import { AuthService } from 'src/app/shared/services/auth.service'
import { DateFormatPipe } from 'src/app/shared/pipe/date-format.pipe'


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  appointments: Array<Appointment> = [];
  date = new FormControl();

  constructor(private appointmentService: AppointmentService, private authService: AuthService, private dateFormatPipe: DateFormatPipe){
    this.getAll();
    
  }

  ngOnInit(): void {}

  book(): void{
    const tmp = JSON.parse(localStorage.getItem('user') as string)['uid'] as string;

    
    const appointment: Appointment = {
      date: this.dateFormatPipe.transform(this.date.value),
      uid: tmp,
      id: 'asdasd'
    };
    
    this.appointmentService.create(appointment).then(_ => {
      console.log("Booking was succseful!");
    }).catch(err => {
      console.error(err)
    });
  }

  modify(appointment: Appointment){
    this.date.setValue(appointment.date as string, {
      onlySelf: false,
      emitEvent: true, 
      emitModelToViewChange: true,
      emitViewToModelChange: true
    })
  }

  delete(id: string){
    this.appointmentService.delete(id).then(_ => {
        console.log("Delete was succseful!");
       }).catch(err => {
         console.error(err)
       });
  }

  getAll(){
    this.appointments = []
    const tmp = JSON.parse(localStorage.getItem('user') as string)['uid'] as string
    this.appointmentService.getAll(tmp as string).subscribe(data =>{
      console.log(data);
      this.appointments = data;
    });
  }
}


