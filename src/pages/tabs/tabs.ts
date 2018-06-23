import { Component } from '@angular/core';

import { MainPage } from '../main/main';
import { FavoritesPage } from '../favorites/favorites';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MainPage;
  tab2Root = FavoritesPage;
  //tab3Root = SettingsPage;

  constructor() {

  }
}
