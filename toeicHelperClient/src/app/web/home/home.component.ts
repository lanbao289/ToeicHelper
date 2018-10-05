import { AuthenticationService } from './../../services/authentication.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any = {};
  valid: any = {};
  message: any = {};
  oldPass = '';
  newPass = '';
  cfnewPass = '';
  newEmail = '';
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUser(this.currentUser.username).subscribe(user => {
      this.user = user;
      this.newEmail = this.user.email;
    });
    this.valid.email = true;
    this.valid.oldPassword = true;
    this.valid.newPassword = true;
    this.valid.cfnewPassword = true;
  }

  updateUser() {
    if (this.validationProfile()) {
      if (this.newEmail !== this.user.email || this.oldPass.length > 0 || this.newPass.length > 0) {
        Promise.all([
          this.userService.checkEmail(this.newEmail),
          this.userService.checkOldPassword(this.user.username, this.oldPass)
        ]).then((result) => {
          result[0].forEach(isEmailExists => {
            if (this.newEmail !== this.user.email) {
              if (!isEmailExists) {
                this.message.email = 'Email already exists !!!';
                this.valid.email = false;
              }
            }
          }).then((res) => {
            result[1].forEach(isCorrectPass => {
              if (this.oldPass.length > 0 && !isCorrectPass) {
                this.message.oldPassword = 'The current password is incorrect !!!';
                this.valid.oldPassword = false;
              }
              if (this.valid.email && this.valid.oldPassword) {
                this.user.email = this.newEmail;
                if (this.newPass !== '') { this.user.password = this.newPass; }
                this.userService.updateUser(this.user).subscribe(user => {
                  this.user = user;
                  alert('Update completed !!!');
                });
                this.newPass = '';
                this.oldPass = '';
                this.cfnewPass = '';
              }
            });
          });
        });
      } else if (this.newPass === '') {
        alert('Please change info to update profile !!!');
      }
    }
  }

  validationProfile() {

    // check email
    this.valid.email = true;
    this.message.email = '';
    const emailRegex = new RegExp('^[a-zA-Z0-9]+@tma.com.vn$');
    if (this.newEmail === undefined || this.newEmail.trim().length === 0) {
      this.message.email = 'Email can not be blank !!!';
      this.valid.email = false;
    } else if (!emailRegex.test(this.newEmail.trim())) {
      this.message.email = 'Only use TMA email !!!';
      this.valid.email = false;
    }

    // check old password
    this.valid.oldPassword = true;
    this.message.oldPassword = '';

    // check new password
    this.valid.newPassword = true;
    this.message.newPassword = '';
    const passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$');
    if (this.oldPass.length > 0 && this.newPass.length === 0) {
      this.message.newPassword = 'New Password can not be blank !!!';
      this.valid.newPassword = false;
    } else if (this.oldPass.length === 0 && this.newPass.length > 0) {
      this.message.oldPassword = 'Please confirm your current password !!!';
      this.valid.oldPassword = false;
    } else if (this.newPass.length < 9 && this.newPass.length > 0) {
      this.message.newPassword = 'New Password must be more than 8 characters !!!';
      this.valid.newPassword = false;
    } else if (this.newPass.length > 15) {
      this.message.newPassword = 'New Password must be less than 15 characters !!!';
      this.valid.newPassword = false;
    } else if (!passwordRegex.test(this.newPass) && this.newPass.length > 0) {
      this.message.newPassword = 'New Password must contains least one upper case,lower case,digit,special character!!!';
      this.valid.newPassword = false;
    } else if (this.oldPass === this.newPass && this.newPass.length > 0) {
      this.message.newPassword = 'The new password must be different from the old password!!!';
      this.valid.newPassword = false;
    }

    // check confirm new password
    this.valid.cfnewPassword = true;
    this.message.cfnewPassword = '';
    if (this.cfnewPass !== this.newPass) {
      this.message.cfnewPassword = 'Confirm password is not correct!!!';
      this.valid.cfnewPassword = false;
    }

    if (!this.valid.email || !this.valid.oldPassword || !this.valid.newPassword || !this.valid.cfnewPassword) {
      return false;
    }
    return true;
  }
}
