import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacypolicePage } from './privacypolice.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacypolicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacypolicePageRoutingModule {}
