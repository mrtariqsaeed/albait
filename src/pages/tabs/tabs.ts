import { Component } from '@angular/core';

import { MainPage } from '../main/main';
import { FavoritesPage } from '../favorites/favorites';
import { SchedulePage } from '../schedule/schedule';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MainPage;
  tab2Root = FavoritesPage;
  tab3Root = SchedulePage;
  tab4Root = ProfilePage;

  constructor() {

  }
  
}
