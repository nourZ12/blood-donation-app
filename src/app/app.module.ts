import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { AdminMainPage } from '../pages/admin-main/admin-main';
import { AddAnnouncePage } from '../pages/add-announce/add-announce';
import { HttpService } from '../core/http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { AnnouncementsPage } from '../pages/announcements/announcements';
import { DonatePage } from '../pages/donate/donate';
import { UserprofilePage } from '../pages/userprofile/userprofile';
import { SearchPage } from '../pages/search/search';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    AdminMainPage,
    AddAnnouncePage,
    AnnouncementsPage,
    DonatePage,
    UserprofilePage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    AdminMainPage,
    AddAnnouncePage,
    AnnouncementsPage,
    DonatePage,
    UserprofilePage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
