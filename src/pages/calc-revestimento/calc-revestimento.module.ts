import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcRevestimentoPage } from './calc-revestimento';

@NgModule({
  declarations: [
    CalcRevestimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(CalcRevestimentoPage),
  ],
})
export class CalcRevestimentoPageModule {}
