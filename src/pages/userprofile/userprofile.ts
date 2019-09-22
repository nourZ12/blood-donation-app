import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-userprofile',
  templateUrl: 'userprofile.html',
})
export class UserprofilePage {
  timeLeft: number
  timeHour: number = 15;
  timeMinute: number = 40;
  timeSecond: number;
  timeDay: number = 27;
  constructor(public navCtrl: NavController) {
    this.timeLeft = 60;
    this.startTimer();
  }

logOut() {
  this.navCtrl.push(HomePage);
}
  startDate = "02/02/2000";
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        //   this.timeSecond=Math.round(this.timeLeft%60);
        //  this.timeMinute=Math.round((this.timeLeft/60)%60);
        // this.timeHour=Math.round(this.timeMinute/60)%60;
        //  this.timeDay=Math.round(this.timeHour/60)%60;
      } else {
        this.timeLeft = 60;
        this.timeMinute--;
      }
    }, 1000)
  }

}