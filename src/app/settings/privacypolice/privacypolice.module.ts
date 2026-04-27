import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacypolicePageRoutingModule } from './privacypolice-routing.module';

import { PrivacypolicePage } from './privacypolice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacypolicePageRoutingModule
  ],
  declarations: [PrivacypolicePage]
})
export class PrivacypolicePageModule {}
