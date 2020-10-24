import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from './server.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  // http options used for making API calls
  // private httpOptions: any;

  // the actual JWT token
  // public token: string;

  // the token expiration date
  // public token_expires: Date;
  //
  // // the username of the logged in user
  // public username: string;
  //
  // // error messages received from the login attempt
  // public errors: any = [];

  constructor(private router: Router, private server: ServerService) {
    // this.httpOptions = {
    //   headers: new HttpHeaders({'Content-Type': 'application/json'})
    // };
    console.log('Auth Service');
    const userData = localStorage.getItem('user');
    if (userData) {
      console.log('Logged in from memory');
      const user = JSON.parse(userData);
      this.token = user.token;
      this.server.setLoggedIn(true, this.token);
      this.loggedIn.next(true);
    }
  }

  login(user) {
    if (user.username !== '' && user.password !== '' ) {
      return this.server.request('POST', '/api-token-auth/', {
        username: user.username,
        password: user.password
      }).subscribe((response: any) => {
        console.log(response.token);
        console.log(response.auth);
        if (response.token !== undefined) {
          this.token = response.token;
          this.server.setLoggedIn(true, this.token);
          this.loggedIn.next(true);
          const userData = {
            token: this.token,
          };
          localStorage.setItem('user', JSON.stringify(userData));
          console.log('set local storage');
          this.router.navigateByUrl('/notice-board');
        }
      });
    }
  }

  logout() {

    this.server.setLoggedIn(false);
    delete this.token;
    this.loggedIn.next(false);
    localStorage.clear();
    console.log('logged out');
    this.router.navigate(['/']);
  }





  // }
  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  // public login(user) {
  //   this.http.post('127.0.0.1:8000/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
  //     data => {
  //       this.updateData(data['token']);
  //     },
  //     err => {
  //       this.errors = err['error'];
  //       console.log('error in retrieving login url');
  //     }
  //   );
  // }
  // Refreshes the JWT token, to extend the time the user is logged in
  // public refreshToken() {
  //   this.HttpC.post('127.0.0.1:8000/api-token-auth/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
  //     data => {
  //       this.updateData(data['token']);
  //     },
  //     err => {
  //       this.errors = err['error'];
  //     }
  //   );
  // }
  
  // public logout() {
  //   this.token = null;
  //   this.token_expires = null;
  //   this.username = null;
  // }
  
  // private updateData(token) {
  //   this.token = token;
  //   this.errors = [];
  
  //   // decode the token to read the username and expiration timestamp
  //   const token_parts = this.token.split(/\./);
  //   const token_decoded = JSON.parse(window.atob(token_parts[1]));
  //   this.token_expires = new Date(token_decoded.exp * 1000);
  //   this.username = token_decoded.username;
  // }

}

