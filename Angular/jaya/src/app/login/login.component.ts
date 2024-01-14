import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
  

})
export class LoginComponent{
  username: string = '';
  password: string = '';
  message: string = '';

  // Inject the AuthenticationService in the constructor
  constructor(private authService: AuthenticationService) {}

  login(): void {
    const isLoggedIn = this.authService.login(this.username, this.password);
    this.message = isLoggedIn ? 'Login successful' : 'Incorrect password';
  }
}
