import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {from, throwError} from 'rxjs';
// import { FormsModule, } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormsModule , ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';    // add this
// import { Login } from '../notices.ts';
import { Login } from 'src/app/notice';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: any;
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  // public loginDetails: Login;

  constructor(private fb: FormBuilder, private _userService: UserService) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid){
      try{
        console.log(this.form.value);
        await this._userService.login(this.form.value);
      } catch (e) {
        this.loginInvalid = true;
        console.log('login failed');
        console.log(e);
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

    // this.user = {
    //   username: '',
    //   password: ''
    // };
  // login() {
  //   this._userService.login({'username': this.user.username, 'password': this.user.password});
  // }
  //
  // refreshToken() {
  //   this._userService.refreshToken();
  // }
  //
  // logout() {
  //   this._userService.logout();
  // }
}
