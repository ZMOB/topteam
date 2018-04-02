import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free'; //Banner
import { SocialSharing } from '@ionic-native/social-sharing'; //Para funcionar o compartilhamento de redes sociais
import { CalcParedePage } from '../calc-parede/calc-parede';
import { CalcForroPage } from '../calc-forro/calc-forro';
import { ABOUT_PAGE } from '../pages.constants';
import { CalcRevestimentoPage } from '../calc-revestimento/calc-revestimento';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private admob: AdMobFree,socialSharing: SocialSharing) {
    }


//Vai abrir a tela desejada, onde a mesma deve ser importada
goToCalcParedePage(){
  this.navCtrl.push(CalcParedePage);
}
goToCalcForroPage(){
  this.navCtrl.push(CalcForroPage);
}
goToCalcRevestimentoPage(){
  this.navCtrl.push(CalcRevestimentoPage);
}



ionViewDidLoad(){

    const bannerConfig: AdMobFreeBannerConfig = {
        id: 'ca-app-pub-0931356783950880/5025519957', 
        isTesting: true,
        autoShow: true
       };
       this.admob.banner.config(bannerConfig);
       
       this.admob.banner.prepare()
         .then(() => {
           // banner Ad is ready
           // if we set autoShow to false, then we will need to call the show method here
         })
         .catch(e => console.log(e)); 

}


}