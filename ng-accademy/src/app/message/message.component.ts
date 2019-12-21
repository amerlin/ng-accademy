import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }

  @Input() public message = '';
  // tslint:disable-next-line:no-input-rename
  @Input('alert-pop') public message1 = '';

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSignup  = new EventEmitter<any>();    // any value type
  public data: any = {};

  public showAlert(): void {
      alert(this.message1);
  }

  public onSubmit(): void {
    // data came from form
    this.onSignup.emit(this.data);  // emit value
  }

  ngOnInit() {
  }

}
