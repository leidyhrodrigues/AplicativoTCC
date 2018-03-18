import { Component } from '@angular/core';
import {  NavController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Login } from '../login/login';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData : any;
  userData = {"cpf": "", "name": "", "endereco": "", "municipio": "", "telefone": "", "password": "", "email": "", "token":""};

  constructor(public navCtrl: NavController, public authService:AuthService ) {
  }

  //envia dados para cadastro de cliente
  signup(){
     this.authService.postData(this.userData,'signup').then((result) => {
      this.responseData = result;
      if(this.responseData.userData){
        console.log(this.responseData);
        localStorage.setItem('userData', JSON.stringify(this.responseData));
        this.navCtrl.push(TabsPage);
      }
        else{ console.log("Usuário já cadastrado!"); }
    }, (err) => {
      // Error log
    });

  }

  //envia para a tela de login
  login(){
    this.navCtrl.push(Login);
  }
}
