import { Component } from '@angular/core';
import { IonicPage, ViewController, ModalController } from 'ionic-angular';

@IonicPage({ name: 'blood-type' })
@Component({
  selector: 'page-blood-type',
  templateUrl: 'blood-type.html',
})
export class BloodTypePage {

  bloodType: string[] = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];

  constructor(private viewCtrl: ViewController, private modalCtrl: ModalController) { }

  onClose() {
    this.viewCtrl.dismiss();
  }

  onChoose(type : string) {
    let typeBlood = type;
    this.viewCtrl.dismiss({type});
  }
}
