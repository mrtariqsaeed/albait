import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoctorsPage } from '../doctors/doctors';

/**
 * Generated class for the SpecialtiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-specialties',
  templateUrl: 'specialties.html',
})
export class SpecialtiesPage {
  specialties:string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.specialties = [];
  }

  ionViewDidLoad() {
    for(let i = 1; i <= 15; i++)
    {
      this.specialties.push('Specialty ' + i);
      console.log('Hi');
    }

    console.log('ionViewDidLoad SpecialtiesPage');
  }

  doctorBySpecialty(specialty)
  {
    this.navCtrl.push(DoctorsPage, {specialty: specialty});
  }

}
