import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage } from '../login/login';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AndroidFullScreen]
})
export class HomePage {

  constructor(public navCtrl: NavController, private androidFullScreen: AndroidFullScreen) {
    this.androidFullScreen.isImmersiveModeSupported()
    .then(() => console.log('Immersive mode supported'))
    .catch(err => console.log(err));
  }
  loginClicked()
  {
    this.navCtrl.push(LoginPage);
  }



}
