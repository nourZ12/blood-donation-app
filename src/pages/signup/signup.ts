import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { BloodTypePage } from '../../shared/blood-type/blood-type';
import { BloodTypeComponent } from '../../components/blood-type/blood-type';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
choosenBloodType: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl: ModalController) {
  }

onSubmit() {
  this.navCtrl.push(BloodTypePage);
}

alert(){
const modal = this.modalCtrl.create('blood-type');
  modal.present();

  modal.onDidDismiss(data => {
    // Do things with data coming from modal, for instance :
    console.log(data);
    this.choosenBloodType = data.type;
});

    }
}
