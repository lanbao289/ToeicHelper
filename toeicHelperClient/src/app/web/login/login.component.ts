import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';
  rememberMe: boolean;
  newUser: any = {};
  valid: any = {};
  message: any = {};

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (this.authenticationService.token != null) {
      this.router.navigate(['/']);
    }
    if (localStorage.getItem('rememberMe') != null) {
      const remember = JSON.parse(localStorage.getItem('rememberMe'));
      this.model.username = remember.username;
      this.model.password = remember.password;
      this.rememberMe = remember.remember;
    }
  }

  onRememberMeChanged(value: boolean) {
    this.rememberMe = value;
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          // login successful
          if (this.rememberMe) {
            // tslint:disable-next-line:max-line-length
            localStorage.setItem('rememberMe', JSON.stringify({ username: this.model.username, password: this.model.password, remember: this.rememberMe }));
          } else {
            localStorage.removeItem('rememberMe');
          }
          alert('Welcome to Toeic Hepler web application !!!');
          this.router.navigate(['']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect !!!';
          this.loading = false;
        }
      });
  }

  register() {
    if (this.validationRegister()) {
      Promise.all([
        this.userService.checkUser(this.newUser.username),
        this.userService.checkEmail(this.newUser.email)
      ]).then((res) => {
        let isUserExists = true;
        res[0].forEach(isExists => {
          if (!isExists) {
            this.message.username = 'Username already exists !!!';
            this.valid.username = false;
          }
          isUserExists = isExists;
        }).then((res1) => {
          res[1].forEach(isEmailExists => {
            if (!isEmailExists) {
              this.message.email = 'Email already exists !!!';
              this.valid.email = false;
            }
            if (isUserExists && isEmailExists) {
              this.newUser.username = this.newUser.username.trim();
              this.newUser.username = this.newUser.username.toLowerCase();
              this.newUser.email = this.newUser.email.trim();
              this.userService.addUser(this.newUser).subscribe(result => {
                this.model.username = result.username;
                this.model.password = this.newUser.password;
                this.login();
              });
            }
          });
        });
      });
    }
  }

  validationRegister() {

    // check username
    this.valid.username = true;
    this.message.username = '';
    const usernameRegex = new RegExp('^[a-z0-9]{7,15}$');
    if (this.newUser.username === undefined || this.newUser.username.trim().length === 0) {
      this.message.username = 'Username can not be blank !!!';
      this.valid.username = false;
    } else if (this.newUser.username.trim().length < 7) {
      this.message.username = 'Username must be more than 6 characters !!!';
      this.valid.username = false;
    } else if (this.newUser.username.trim().length > 15) {
      this.message.username = 'Username must be less than 15 characters !!!';
      this.valid.username = false;
    } else if (!usernameRegex.test(this.newUser.username.trim())) {
      this.message.username = 'Username only contains letters and numbers !!!';
      this.valid.username = false;
    }

    // check email
    this.valid.email = true;
    this.message.email = '';
    const emailRegex = new RegExp('^[a-zA-Z0-9]+@tma.com.vn$');
    if (this.newUser.email === undefined || this.newUser.email.trim().length === 0) {
      this.message.email = 'Email can not be blank !!!';
      this.valid.email = false;
    } else if (!emailRegex.test(this.newUser.email.trim())) {
      this.message.email = 'Only use TMA email for register !!!';
      this.valid.email = false;
    }

    // check password
    this.valid.passw = true;
    this.message.passw = '';
    const passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$');
    if (this.newUser.password === undefined || this.newUser.password.length === 0) {
      this.message.passw = 'Password can not be blank !!!';
      this.valid.passw = false;
    } else if (this.newUser.password.length < 9) {
      this.message.passw = 'Password must be more than 8 characters !!!';
      this.valid.passw = false;
    } else if (this.newUser.password.length > 15) {
      this.message.passw = 'Password must be less than 15 characters !!!';
      this.valid.passw = false;
    } else if (!passwordRegex.test(this.newUser.password)) {
      this.message.passw = 'Password must contains least one upper case,lower case,digit,special character!!!';
      this.valid.passw = false;
    }

    // check confirm password
    this.valid.cfpassword = true;
    this.message.cfpassword = '';
    if (this.newUser.cfpassword !== this.newUser.password) {
      this.message.cfpassword = 'Confirm password is not correct!!!';
      this.valid.cfpassword = false;
    }

    if (!this.valid.username || !this.valid.email || !this.valid.passw || !this.valid.cfpassword) {
      return false;
    }
    return true;
  }
}
