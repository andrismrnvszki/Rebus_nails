import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Appointment } from '../models/Appointment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  collectionName = 'Appointments';

  constructor(private afs: AngularFirestore) { }

  //CRUD

  create(){
    this.afs.collection<Appointment>(this.collectionName).add
  }

  getAll(){}

  update(){}

  delete(){}
}
