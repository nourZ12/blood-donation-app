import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { DonatePage } from '../donate/donate';

@Component({
  selector: 'page-announcements',
  templateUrl: 'announcements.html',
})
export class AnnouncementsPage {
  announcements = ["O-", "AB+", "B+", "A-", "O-", "AB+", "B+", "A-", "O-", "AB+", "B+", "A-", "O-", "AB+", "B+", "A-", "O-", "AB+", "B+", "A-"];
  constructor(private menuCtrl: MenuController, public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnouncementsPage');
  }
  goToDonatePage() {
    this.navCtrl.push(DonatePage);
  }

  onOpenMenu() {
    this.menuCtrl.open();
  }
}