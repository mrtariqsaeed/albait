import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  loginClicked()
  {
    this.navCtrl.push(LoginPage);
  }

}
