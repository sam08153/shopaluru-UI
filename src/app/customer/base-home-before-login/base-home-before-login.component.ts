import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/service-index';

@Component({
  selector: 'app-base-home-before-login',
  templateUrl: './base-home-before-login.component.html',
  styleUrls: ['./base-home-before-login.component.css']
})
export class BaseHomeBeforeLoginComponent implements OnInit {

  constructor(private auth: CustomerService) { }

  ngOnInit(): void {
    this.isLoggedin();
  }


  isLoggedin(): any{
      return this.auth.isaccessvalid()
  }


}
