import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  {
    path: 'about-app',
    loadChildren: () => import('./about-app/about-app.module').then(m => m.AboutAppPageModule)
  },  {
    path: 'how-to-play',
    loadChildren: () => import('./how-to-play/how-to-play.module').then( m => m.HowToPlayPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule { }
