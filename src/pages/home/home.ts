import { Component } from '@angular/core';
import { NavController, App, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { EditPage } from '../edit/edit';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  userDetails : any;
  responseData: any;

  userPostData = {"user_id":"","token":""};

  constructor(public navCtrl: NavController, public authService:AuthService, public app: App, private toastCtrl:ToastController) {
  const data = JSON.parse(localStorage.getItem('userData'));
  this.userDetails = data.userData;

  this.userPostData.user_id = this.userDetails.user_id;
  this.userPostData.token = this.userDetails.token;

}

//envia para a tela de boas vindas
backToWelcome(){
   const root = this.app.getRootNav();
   root.popToRoot();
}

//limpa variáveis e sai do sistema
logout(){
     localStorage.clear();
     setTimeout(() => this.backToWelcome(), 1000);
}

edit(){
  this.navCtrl.push(EditPage, this.userDetails, {animate:false});
}

//função para deletar cliente
delete(){

  this.authService.postData(this.userDetails,'delete').then((result) => {
    this.responseData = result;
    if(this.responseData.userData){
      this.logout();
      this.presentToast("Cliente deletado com sucesso!");
    }
    else{ console.log("Erro ao deletar usuário"); }
   }, (err) => {
     // Error log
   });

}

//apresenta mensagem no rodapé do app
presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}

}
