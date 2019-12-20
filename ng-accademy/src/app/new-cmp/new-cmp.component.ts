import { Component, OnInit } from '@angular/core';

/** component definitions */
@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})

export class NewCmpComponent implements OnInit {

  newComponent = 'Enter new component created';

  /** module constructor */
  constructor() { }

  /*module init*/
  ngOnInit() {
  }

}
