import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Appointment } from '../../shared/models/Appointment';
import { AppointmentService } from '../../shared/services/appointment.service';
import { AuthService } from 'src/app/shared/services/auth.service'
import { DateFormatPipe } from 'src/app/shared/pipe/date-format.pipe'
//import { Timestamp } from firebase.firestore.Timestamp
//import { Timestamp } from 'firebase/firestore'

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  date = new FormControl('');
  //minDate: Date;
  appointments: Array<Appointment> = [];
  


  constructor(private appointmentService: AppointmentService, private authService: AuthService,
              
              ){
    //const currentYear = new Date();
    //this.minDate = new Date((currentYear.getDate()));
    
    this.appointments = []
    const tmp = JSON.parse(localStorage.getItem('user') as string)['uid'] as string
    //console.log(tmp)
    this.appointmentService.getAll(tmp as string).subscribe(data =>{
      console.log(data);
      this.appointments = data;
      let i = 0;
      
      for(const object in this.appointments){
        // this.timeStamp = Date.parse(object[0]) ;
        // var date = this.timeStamp.toDate();
        //console.log(object);
        
      }
    });
    
  }

  ngOnInit(): void {
    

  }

  book(): void{
    //console.log('FASZ')
    //console.log(this.appointments);
    
    const tmp = JSON.parse(localStorage.getItem('user') as string)
    const tmp2 = tmp['uid'] as string
    var splitendo = this.date.value as string
    var splitted = splitendo?.toString().split(' ')
    var year = splitted[3]
    var month = splitted[2]
    var day = splitted[1];
    const appointment: Appointment = {
      date: year.concat(' ').concat(day).concat(' ').concat(month),
      uid: tmp2,
      id: 'asdasd'
    };
    console.log(appointment.date)
    
    this.appointmentService.create(appointment).then(_ => {
      console.log("Booking was succseful!");
    }).catch(err => {
      console.error(err)
    });
  }

  modify(appointment: Appointment){
    
  }

  delete(id: string){
    // const tmp = JSON.parse(localStorage.getItem('user') as string)['uid'] as string
    // var imgID: string;
    // this.appointmentService.getAll(tmp).subscribe(data =>{
    //   console.log(typeof(data))
    //   for(const object in data){
    //   }
    //   this.appointmentService.delete(uid).then(_ => {
    //     console.log("Delete was succseful!");
    //   }).catch(err => {
    //     console.error(err)
    //   });
    // });
    

    this.appointmentService.delete(id).then(_ => {
        console.log("Delete was succseful!");
       }).catch(err => {
         console.error(err)
       });
    
    
      
  
    
  }
}


