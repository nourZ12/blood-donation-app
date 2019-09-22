import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { BloodTypePage } from '../../shared/blood-type/blood-type';
import { BloodTypeComponent } from '../../components/blood-type/blood-type';
import { NgForm } from '@angular/forms';
import { SignUp } from '../../models/signup.model';
import { HttpService } from '../../core/http/http.service';
import { AnnouncementsPage } from '../announcements/announcements';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  formInfo: SignUp;
  choosenBloodType: string = "";
  constructor(private httpService: HttpService, public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.formInfo = new SignUp("", new Date(), null, "", "", "", "", "", "", "", "");
  }

  onSubmit() {

  }
  getInfo(form: NgForm) {
    // this.formInfo = new SignUp(form.value.name,form.value.date,form.value.phone,form.value.email,form.value.password,"",form.value.loaction,"","","","");
    this.httpService.signUpUser(this.formInfo);
    console.log(this.formInfo);
  }
  alert() {
    const modal = this.modalCtrl.create('blood-type');
    modal.present();

    modal.onDidDismiss(data => {
      this.choosenBloodType = data.type;
    });

  }
  onSignUp() {
    this.navCtrl.push(AnnouncementsPage);
  }
}
