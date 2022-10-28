import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeBeforeLoginComponent } from './customer/home-before-login/home-before-login.component';
import { BaseHomeBeforeLoginComponent } from './customer/base-home-before-login/base-home-before-login.component';
import { BodyComponent } from './customer/body/body.component';
import { NavComponent } from './customer/nav/nav.component';
import { FooterComponent } from './customer/footer/footer.component';
import { JwtModule } from "@auth0/angular-jwt";
import { SearchBoxComponent } from './customer/search-box/search-box.component';
import { LoginButtonComponent } from './customer/login-button/login-button.component';
import { LogoutButtonComponent } from './customer/logout-button/logout-button.component';
import { FormsComponent } from './forms/forms.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './common-component/reset-password/reset-password.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeBeforeLoginComponent,
    BaseHomeBeforeLoginComponent,
    BodyComponent,
    NavComponent,
    FooterComponent,
    SearchBoxComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    FormsComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JwtModule.forRoot({}),
    MatDialogModule, BrowserAnimationsModule,
    MatTabsModule,ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule
    
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent],
  exports: [FormsComponent]
})
export class AppModule { }
