import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    username: string = '';
    password: string = '';
    showCredentials: string = '';
  
    login() {
  
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      this.showCredentials = 'loginsuccesful'
    
     
    }
  }
  
  
  


