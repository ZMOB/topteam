import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CursosPageModule } from '../pages/cursos/cursos.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AdMobFree } from '@ionic-native/admob-free';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CalcParedePageModule } from '../pages/calc-parede/calc-parede.module';
import { CalcForroPageModule } from '../pages/calc-forro/calc-forro.module';
import { CalcRevestimentoPageModule } from '../pages/calc-revestimento/calc-revestimento.module';
import { AboutPageModule } from '../pages/about/about.module';
 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalcParedePageModule,
    CalcForroPageModule,
    CalcRevestimentoPageModule,
    CursosPageModule,
    AboutPageModule,
  ], 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    SocialSharing,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
