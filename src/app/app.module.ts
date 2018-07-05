import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoritesPage } from '../pages/favorites/favorites';
import { DoctorPage } from '../pages/doctor/doctor';
import { SpecialtiesPage } from '../pages/specialties/specialties';
import { DoctorsPage } from '../pages/doctors/doctors'
import { SchedulePage } from '../pages/schedule/schedule';
import { ProfilePage } from '../pages/profile/profile';
import { SymptomsPage } from '../pages/symptoms/symptoms';
import { SelectedDoctorPage} from '../pages/selected-doctor/selected-doctor';
import { RequestReviewPage } from '../pages/request-review/request-review';
import { RegisterPage } from '../pages/register/register';

import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SpecialtiesProvider } from '../providers/specialties/specialties';

import { HttpClientModule } from '@angular/common/http';
import { SymptomsProvider } from '../providers/symptoms/symptoms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MainPage,
    TabsPage,
    FavoritesPage,
    DoctorPage,
    SpecialtiesPage,
    DoctorsPage,
    SchedulePage,
    ProfilePage,
    SymptomsPage,
    SelectedDoctorPage,
    RequestReviewPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {backButtonText: ''}),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule,
    HttpClientModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MainPage,
    TabsPage,
    FavoritesPage,
    DoctorPage,
    SpecialtiesPage,
    DoctorsPage,
    SchedulePage,
    ProfilePage,
    SymptomsPage,
    SelectedDoctorPage,
    RequestReviewPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AndroidFullScreen,
    SpecialtiesProvider,
    HttpClientModule,
    SymptomsProvider
    //AngularFirestoreModule
    //SpecialtiesService
  ]
})
export class AppModule {}
