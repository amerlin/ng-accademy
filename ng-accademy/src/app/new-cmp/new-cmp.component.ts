import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** component definitions */
@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})

export class NewCmpComponent implements OnInit {

  newComponent = 'New component created';

  //modelbinding: interpolation
  interpolationProp ='Interpolation property';

  //modelbinding: 
  propertyProp = 'Property binding text';

  //event binding
  fnSubmit(){
    console.log('Event binding click()');
  }

  //two way data binding
  strName = 'pippo';
  firstName = this.strName;

  //Input Variable
  @Input() caption : string;  
  @Input('phoneNo') phoneNo : string;  

  //output
  @Output('onSubmit') submitEvent = new EventEmitter<any>();
  

  /** module constructor */
  constructor() { }

  /*module init*/
  ngOnInit() {
   console.log('ngInit for cmp');
  }

}
