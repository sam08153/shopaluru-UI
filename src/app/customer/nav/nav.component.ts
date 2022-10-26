import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/service-index';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private auth: CustomerService) { }

  ngOnInit(): void {
    this.isLoggedin();
  }


  isLoggedin():boolean{
     if(this.auth.isaccessvalid()){
       return true
     }
     return false
  }
}
