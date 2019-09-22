import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'blood-type',
  templateUrl: 'blood-type.html'
})
export class BloodTypeComponent {

  bloodType: string [] = ['O+', 'O-','A+','A-','B+','B-','AB+','AB-'];

  constructor(private alertCtrl: AlertController ) {

  }


}
