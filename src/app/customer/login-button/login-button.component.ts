import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
 import { FormsComponent } from '../../forms/forms.component';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
  
})
export class LoginButtonComponent implements OnInit {

  constructor(
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    
    let dialogRef = this.dialog.open(FormsComponent, {
      disableClose: true}
     );

     dialogRef.afterClosed().subscribe( (result: any) => {

     })
   }

}
