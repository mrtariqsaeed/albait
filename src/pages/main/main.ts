import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SpecialtiesProvider } from '../../providers/specialties/specialties';
import { Specialty } from '../../models/specialtyInterface';

import { SymptomsPage } from '../symptoms/symptoms';
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  specialties: Specialty[];

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private specialtiesProvider: SpecialtiesProvider) {
    this.specialtiesProvider.getSpecialties().subscribe(specialties => {
      console.log(specialties);
      this.specialties = specialties;
    });

    // this.specialties$ = this.specialties
    //   .getSpecialties()
    //   .snapshotChanges()
    //   .map(changes => {
    //     return changes.map(c => ({
    //       key: c.payload.key, ...c.payload.value()
    //     }));
    //   })

    //this.items = db.collection('specialties').valueChanges();

  }

  ionViewWillLoad()
  {
    this.afAuth.authState.subscribe(data => console.log(data))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  goSymptoms(){
    this.navCtrl.push(SymptomsPage);
  }

}
