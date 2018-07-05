import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../models/userInterface';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  constructor(private afAuth: AngularFireAuth, public alertCtrl: AlertController, public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  loginFN(user: User)
  {
    //console.log('Hi');
    //
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      //console.log(result);
      .then(
        () => {
          this.navCtrl.setRoot(TabsPage);
        },
        error => {
          const alert = this.alertCtrl.create({
            title: 'Invalid Login',
            subTitle: 'have you made a typo?',
            buttons: ['OK']
          });

          alert.present();
        },
      );
  }

  registerFN()
  {
    this.navCtrl.push(RegisterPage);
  }

}
