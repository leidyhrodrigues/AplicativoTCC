import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { HttpModule } from '@angular/http';
import { AuthService } from '../providers/auth-service/auth-service';
import { Common } from '../providers/common/common';
import { SplitPane } from '../providers/split-pane/split-pane';
import { EditPage } from '../pages/edit/edit';
/*import { SignaturePadModule } from 'angular2-signaturepad';*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Welcome,
    Login,
    SignupPage,
    TabsPage,
    EditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Welcome,
    Login,
    SignupPage,
    TabsPage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    Common,
    SplitPane
  ]
})
export class AppModule {}
