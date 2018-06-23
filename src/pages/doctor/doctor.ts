import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {
  doctor: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.doctor = navParams.get('doctor');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorPage');
  }

}
