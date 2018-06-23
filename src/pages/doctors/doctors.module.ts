import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorsPage } from './doctors';

@NgModule({
  declarations: [
    DoctorsPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorsPage),
  ],
})
export class DoctorsPageModule {}
