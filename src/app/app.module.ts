import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoritesPage } from '../pages/favorites/favorites';
import { DoctorPage } from '../pages/doctor/doctor';
import { SpecialtiesPage } from '../pages/specialties/specialties';
import { DoctorsPage } from '../pages/doctors/doctors'

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
    DoctorsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {backButtonText: ''})
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
    DoctorsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
