import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcForroPage } from './calc-forro';

@NgModule({
  declarations: [
    CalcForroPage,
  ],
  imports: [
    IonicPageModule.forChild(CalcForroPage),
  ],
})
export class CalcForroPageModule {}
