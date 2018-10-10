import { Component, OnInit } from '@angular/core';
import { SimpleData } from '../simple-data';

@Component({
  selector: 'OneWayBinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OneWayBindingComponent implements OnInit {

  myProperty = "Hello World";

  myPropertyObject : SimpleData = {
    id : 0,
    name: "Hello Mars"
  }

  constructor() { }

  ngOnInit() {
  }

}
