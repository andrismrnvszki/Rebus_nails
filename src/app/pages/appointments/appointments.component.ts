import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  date = new FormControl('');

  ngOnInit(): void {
    // would like to get query parameters here...
    // this.route...
  }

  book(): void{
    console.log(this.date.value);
    
  }
}
