import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddAnnouncePage } from '../add-announce/add-announce';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-admin-main',
  templateUrl: 'admin-main.html',
})
export class AdminMainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
onSearch() {
this.navCtrl.push(SearchPage);
}
onAdd() {
  this.navCtrl.push(AddAnnouncePage);
}
}
