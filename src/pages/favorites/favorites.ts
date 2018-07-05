import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoctorPage } from '../doctor/doctor';
/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  doctors:string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.doctors = ['Ahmed Saleh', 'Tamer Ali', 'Fady Ahmed'];
    console.log('ionViewDidLoad FavoritesPage');
  }

  deleteItem(i){
    //console.log(i);
    this.doctors.splice(i, 1);
  }

  goDoctorProfile(doctor)
  {
    this.navCtrl.push(DoctorPage,{doctor: doctor} );
  }
}
