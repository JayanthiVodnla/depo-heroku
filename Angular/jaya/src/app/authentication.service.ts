import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  private readonly adminUsername = 'admin';
  private readonly adminPassword = 'admin';

  login(username: string, password: string): boolean {
    return username === this.adminUsername && password === this.adminPassword;
  }
}
