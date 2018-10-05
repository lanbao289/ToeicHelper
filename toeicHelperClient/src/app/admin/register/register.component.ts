import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: any = {};
  valid: any = {};
  message: any = {};

  constructor(
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticationService.isTokenExpired();
    this.newUser.role = 'ROLE_ADMIN';
    this.valid.username = true;
    this.valid.email = true;
    this.valid.password = true;
    this.valid.cfpassword = true;
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
              this.userService.addUserForAdmin(this.newUser).subscribe(result => {
                alert('Account successfully created !!!');
                this.router.navigate(['/admin/user']);
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
    this.valid.password = true;
    this.message.password = '';
    const passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$');
    if (this.newUser.password === undefined || this.newUser.password.length === 0) {
      this.message.password = 'Password can not be blank !!!';
      this.valid.password = false;
    } else if (this.newUser.password.length < 9) {
      this.message.password = 'Password must be more than 8 characters !!!';
      this.valid.password = false;
    } else if (this.newUser.password.length > 15) {
      this.message.password = 'Password must be less than 15 characters !!!';
      this.valid.password = false;
    } else if (!passwordRegex.test(this.newUser.password)) {
      this.message.password = 'Password must contains least one upper case,lower case,digit,special character!!!';
      this.valid.password = false;
    }

    // check confirm password
    this.valid.cfpassword = true;
    this.message.cfpassword = '';
    if (this.newUser.cfpassword !== this.newUser.password) {
      this.message.cfpassword = 'Confirm password is not correct!!!';
      this.valid.cfpassword = false;
    }

    if (!this.valid.username || !this.valid.email || !this.valid.password || !this.valid.cfpassword) {
      return false;
    }
    return true;
  }

  cancel() {
    this.router.navigate(['/admin/user']);
  }
}
