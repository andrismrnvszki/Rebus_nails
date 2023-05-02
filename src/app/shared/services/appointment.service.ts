import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Appointment } from '../models/Appointment';
import { doc, deleteDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  collectionName = 'Appointments';

  constructor(private afs: AngularFirestore) { }

  //CRUD

  create(appointment: Appointment){
    appointment.id = this.afs.createId();
    return this.afs.collection<Appointment>(this.collectionName).doc(appointment.id).set(appointment);
  }

  getAll(id: string){
    return this.afs.collection<Appointment>(this.collectionName, ref => ref.where('uid', '==', id)).valueChanges();
  }

  update(appointment: Appointment){
    return this.afs.collection<Appointment>(this.collectionName).doc(appointment.id).set(appointment);
  }

  delete(id: string){
    return this.afs.collection<Appointment>(this.collectionName).doc(id).delete();
  }
}
