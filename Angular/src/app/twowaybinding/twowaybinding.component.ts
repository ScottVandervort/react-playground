import { Component, OnInit } from '@angular/core';
import { SimpleData } from '../simple-data';

@Component({
  selector: 'TwoWayBinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  myProperty = "Hello World";

  myPropertyObject : SimpleData = {
    id : 0,
    name: "Hello Mars"
  }

  constructor() { }

  ngOnInit() {
  }

}
