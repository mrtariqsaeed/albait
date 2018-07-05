import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoctorPage } from '../doctor/doctor';

/**
 * Generated class for the DoctorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctors',
  templateUrl: 'doctors.html',
})
export class DoctorsPage {
  specialty: any;
  doctors:string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.doctors = ['Ahmed Saleh', 'Tariq Saeed', 'Essam Mohamed', 'Karim Kamel', 'Tamer Ali', 'Fady Ahmed'];
    this.specialty = navParams.get('specialty');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorsPage');
  }

  goDoctorProfile(doctor)
  {
    this.navCtrl.push(DoctorPage, {doctor: doctor});
  }


}
