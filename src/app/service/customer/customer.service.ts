import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";


const jwtHelper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    public jwtHelper: JwtHelperService
  ){

  }


  public isaccessvalid(): boolean {
    const accesstoken = localStorage.getItem(' ');
    return !!(accesstoken && !this.jwtHelper.isTokenExpired(accesstoken));
  }

  public isrefreshvalid(): boolean {
    const refreshToken = localStorage.getItem('c_rt');
    return !!(refreshToken && !this.jwtHelper.isTokenExpired(refreshToken));
  }


}
