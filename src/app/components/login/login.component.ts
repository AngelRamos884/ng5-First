import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService) { }
  ingresar(pro: string){
    console.log(pro);
    this.loginService.login(pro);
  }
  ngOnInit() {
  }

}
