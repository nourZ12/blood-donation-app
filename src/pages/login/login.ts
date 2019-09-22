import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { AnnouncementsPage } from '../announcements/announcements';
import { NgForm } from '@angular/forms';
import { AdminMainPage } from '../admin-main/admin-main';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('nav') nav: NavController;
  email: string;
  password: string;

  constructor(private navCtrl: NavController) { }

  pnSignUp() {
    this.nav.push(SignupPage);
  }


  logInUser(form: NgForm) {
    this.email = form.value.email;
    console.log(form);
    this.password = form.value.password;

    if (this.email == 'admin@admin.com') {
      this.navCtrl.push(AdminMainPage);
    }
    else {
      this.navCtrl.push(AnnouncementsPage);
    }
  }

}
