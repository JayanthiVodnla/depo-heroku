import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login';
  
  username:string='admin/admin';
  password:string='';
  showCredentials:boolean=false;
  displayCredentials(){
    this.showCredentials=true;
  }
    }
  
  




