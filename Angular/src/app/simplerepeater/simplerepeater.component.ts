import { Component, OnInit } from '@angular/core';
import { SimpleCollection } from '../simple-collection';

@Component({
  selector: 'SimpleRepeater',
  templateUrl: './simplerepeater.component.html',
  styleUrls: ['./simplerepeater.component.css']
})
export class SimpleRepeaterComponent implements OnInit {

  myCollection = SimpleCollection;

  constructor() { }

  ngOnInit() {
  }

}
