import { Component, OnInit } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTabsModule} from '@angular/material/tabs';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router, RouterModule } from '@angular/router';

import { ResetPasswordComponent } from '../common-component/common-component-index';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });;
  signupForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    password: new FormControl(''),
    phone_number: new FormControl('')
  });;

  model: any = {};
  loading : boolean = false;
  RegistrationFlag: boolean = false;
  RegloginError: boolean = false;
  loginFlag: boolean = false;

  constructor(
    public thisDialogRef: MatDialogRef<FormsComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: string,
    private formBuilder: FormBuilder,
    private router: Router,
    // private customerService: CustomerService,
    // private customerAuth: CustomerAuthenticationService,
    
    ) {
      this.loginFormI();
      this.signupFormI();
     }



  ngOnInit(): void {
    
  }

  loginFormI(): void{
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.pattern(EMAIL_REGEX),Validators.required]],
      password: ['',[Validators.required,
              Validators.minLength(5)]
            ],
    });
  }
  signupFormI() : void{
    this.signupForm = this.formBuilder.group({
      email: ['',[Validators.pattern(EMAIL_REGEX),Validators.required]],
      first_name:['', [Validators.required]],
      last_name:['', [Validators.required]],
      password: ['', [Validators.required,
                    Validators.minLength(5)]],
      phone_number:['',[Validators.required]]
    });
  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

  onLoigin() {
    const val =this.loginForm.value
    const email = val.email
    const password = val.password
    this.loginFlag = false;
    if (this.loginForm.valid) {
      // this.customerAuth.login(email, password)
      //     .subscribe((data: any) => {
      //       this.onCloseCancel()
      //       //this.router.navigateByUrl('/')
      //   },
      //   error => {
      //     this.loginFlag = true;
      //     this.loading = false;
      // })
    }
  }
  onRegister(){
    const vals =this.signupForm.value
    const email = vals.email
    const password = vals.password

    if (this.signupForm.valid) {
      this.loading = true;
      // this.customerService.create(vals)
      // .subscribe(
      //     data => {
      //       if (data == "success") {
      //         this.customerAuth.login(email, password)
      //           .subscribe(data => {
      //             this.loading = false;
      //             this.onCloseCancel();
      //             //this.router.navigateByUrl('/');
      //             },
      //             error => {
      //               this.loading = false;
      //               this.RegloginError = true;
      //             })
      //           }
      //       },
      //     error => {
      //         this.loading = false;
      //         this.RegloginError = false;
      //         this.RegistrationFlag = true;
      //         this.loading = false;
      //     })
      }
    }




}
