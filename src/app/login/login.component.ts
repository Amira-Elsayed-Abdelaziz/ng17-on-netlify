import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes,RouterLink,RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login={
    email:'',
    password:''
  };
  handleIt(loginForm:any)
  {
    console.log(loginForm)
  }
}
