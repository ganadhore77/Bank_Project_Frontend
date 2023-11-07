import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service : DashboardService) {   }

email:any;
password:any;

submitButton() {

  let loginObject = {
    email : this.email,
    password : this.password
  }

  this.service.login(loginObject);
}


}
