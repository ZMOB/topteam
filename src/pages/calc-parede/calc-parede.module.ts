import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcParedePage } from './calc-parede';

@NgModule({
  declarations: [
    CalcParedePage,
  ],
  imports: [
    IonicPageModule.forChild(CalcParedePage),
  ],
})
export class CalcParedePageModule {}
