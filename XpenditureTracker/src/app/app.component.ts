import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { DashBoardPage } from '../pages/dashboard/dashboard';
import { ReportPage } from '../pages/report/report';
import { AboutPage } from '../pages/about/about';

import { AuthService } from './auth.service';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

 
  rootPage: any = DashBoardPage;

  pages: Array<{title: string, component: any}>;

  constructor(private platform: Platform, private auth: AuthService,) {
     this.initializeApp();


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: DashBoardPage },
      { title: 'Search', component: ReportPage },
      { title: 'About', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();



    });
  }

 

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
