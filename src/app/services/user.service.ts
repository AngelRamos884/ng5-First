import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  users:Observable<User[]>;
  constructor(public afs: AngularFirestore) { 
    this.users = this.afs.collection('users').valueChanges();
  }
  
  getUsers(){
    return this.users;
  }

}
