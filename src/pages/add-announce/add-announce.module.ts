import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAnnouncePage } from './add-announce';

@NgModule({
  declarations: [
    AddAnnouncePage,
  ],
  imports: [
    IonicPageModule.forChild(AddAnnouncePage),
  ],
})
export class AddAnnouncePageModule {}
