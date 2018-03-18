import { Component } from '@angular/core';
import {  NavController, App} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Login } from '../login/login';
import { HomePage } from '../home/home';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  responseData : any;
  userDetails : any;
  userData = {"cpf": "", "name": "", "endereco": "", "municipio": "", "telefone": "", "password": "", "email": "", "token":""};
  userPostData = {"cpf":"","token":""};

  constructor(public navCtrl: NavController, public authService:AuthService, public app:App ) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;

    this.userPostData.cpf = this.userDetails.cpf;
    this.userPostData.token = this.userDetails.token;
    this.userData.email = this.userDetails.email;
    this.userData.cpf = this.userDetails.cpf;
    this.userData.name = this.userDetails.nome;
    this.userData.endereco = this.userDetails.endereco;
    this.userData.municipio = this.userDetails.municipio;
    this.userData.telefone = this.userDetails.telefone;
    this.userData.password = this.userDetails.password;

  }

  //função que envia os dados para edição
  edit(){
     this.authService.postData(this.userData,'edit').then((result) => {
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

  //envia para tela de Login
  login(){
    //Login page link
    this.navCtrl.push(Login);
  }

  //envia para home
  backToHome(){
     this.navCtrl.push(HomePage);
  }

}
