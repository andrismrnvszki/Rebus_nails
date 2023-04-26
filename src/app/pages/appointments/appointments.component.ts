import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Appointment } from 'src/app/shared/models/Appointment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  date = new FormControl('');
  minDate: Date;


  constructor(){
    const currentYear = new Date();
    this.minDate = new Date((currentYear.getDate()));
  }

  ngOnInit(): void {
    // would like to get query parameters here...
    // this.route...
  }

  book(): void{
    let alma;
    alma = this.date.value;
    if (alma) {
      console.log(this.date.value);
    };
    const tmp = JSON.parse(localStorage.getItem('user') as string)
    const tmp2 = tmp['uid'] as string
    const appointment: Appointment = {
      date: Date = this.date as any,
      uid: tmp2
    };
    //TODO NYEEEEEEEE
  }
}
