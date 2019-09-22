import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage } from '../pages/signup/signup'
import { HomePage } from '../pages/home/home';
import { AdminMainPage } from '../pages/admin-main/admin-main';
import { AddAnnouncePage } from '../pages/add-announce/add-announce';
import { UserprofilePage } from '../pages/userprofile/userprofile';
import { AnnouncementsPage } from '../pages/announcements/announcements';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') nav: NavController;
  rootPage: any = HomePage;
  userProfile = UserprofilePage;
  announcePage = AnnouncementsPage;
  constructor( private menuCtrl: MenuController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onSignOut(){
    this.nav.popToRoot();
  }
}

