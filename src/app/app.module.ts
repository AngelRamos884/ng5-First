import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Import AngularFireModules 
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

//import Conection of Firebase 
import { environment } from '../environments/environment';
//Import Services
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
//Import components
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-fs'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [UserService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
