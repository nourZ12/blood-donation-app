import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BloodTypePage } from './blood-type';

@NgModule({
  declarations: [
    BloodTypePage,
  ],
  imports: [
    IonicPageModule.forChild(BloodTypePage),
  ],
})
export class BloodTypePageModule {}
