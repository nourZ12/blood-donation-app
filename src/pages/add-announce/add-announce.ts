import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AnnouncementsPage } from '../announcements/announcements';

@Component({
  selector: 'add-announce',
  templateUrl: 'add-announce.html'
})
export class AddAnnouncePage {
  choosenBloodType: string;
  imgsrc: string = '../../assets/d0.png';
  images = ['../../assets/d1.png', '../../assets/d2.png', '../../assets/d3.png', '../../assets/d4.png', '../../assets/d5.png', '../../assets/d6.png', '../../assets/d7.png', '../../assets/d8.png', '../../assets/d9.png', '../../assets/d10.png'];
  constructor(private modalCtrl: ModalController, private navCtrl: NavController) { }

  onAdd() {
    this.navCtrl.push(AnnouncementsPage);
  }
  alert(){
    const modal = this.modalCtrl.create('blood-type');
      modal.present();
    
      modal.onDidDismiss(data => {
        this.choosenBloodType = data.type;
    });
    
        }

  drop1() {

    this.imgsrc = this.images[0];
  }
  drop2() {
    this.imgsrc = this.images[1];
  }
  drop3() {
    this.imgsrc = this.images[2];
  }
  drop4() {
    this.imgsrc = this.images[3];
  }
  drop5() {
    this.imgsrc = this.images[4];
  }
  drop6() {
    this.imgsrc = this.images[5];
  }
  drop7() {
    this.imgsrc = this.images[6];
  }
  drop8() {
    this.imgsrc = this.images[7];
  }
  drop9() {
    this.imgsrc = this.images[8];
  }
  drop10() {
    this.imgsrc = this.images[9];
  }
}