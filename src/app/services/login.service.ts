import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class LoginService {
  public user: any = {};
  constructor(public afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe(user =>{

      console.log('Estado del usuario', user);

      if(!user){
        return;
      }
      this.user.nombre = user.displayName;
      this.user.uid = user.uid;

    });
  }
  login(pro:String){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
