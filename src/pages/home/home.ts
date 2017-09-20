import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   cards = [
       {
         imgPath: "smg_fav.jpg",
         title: "Super Mario Galaxy",
         desc: "Best Game. Period!",
         favorited: false
       },
       {
           imgPath: "row_fav.jpg",
           title: "Rowlet",
           desc: "Best Owl. Period!",
           favorited: false
       },
       {
           imgPath: "Woah_JGMAITTP.jpg",
           title: "Vegas Baby!",
           desc: "Best Trip. Period",
           favorited: false
       }
   ]
  constructor(public navCtrl: NavController) {

  }

  clickFav(card) {
    let index = this.cards.indexOf(card);
    if(index > -1)
      if (card.favorited){
        this.cards[index].favorited = false;
      }else{
        this.cards[index].favorited = true;
      }
  }
}
