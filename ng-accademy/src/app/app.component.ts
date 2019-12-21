import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ng-accademy';
  months = ['Jan', 'Feb', 'March', 'April'];
  isAvailable = false;
  /*public value */
  public val = 'This is alert popup message from parent.';
  showColor = false;

  public changeColor(): void {
    this.showColor = !this.showColor;
 }


  // data from child
  public onSignup(data: any): void {
    let strMessage: string = 'Thanks for Signup ' + data.name + '. ';
    strMessage += 'Email id ' + data.email + ' has been registered successfully.';
    alert(strMessage);
  }
}


