import { Component, OnInit } from '@angular/core';
import { SimpleData } from '../simple-data';
import { SimpleCollection } from '../simple-collection';

@Component({
  selector: 'MasterDetailSimple',
  templateUrl: './masterdetailsimple.component.html',
  styleUrls: ['./masterdetailsimple.component.css']
})
export class MasterDetailSimpleComponent implements OnInit {

  myCollection = SimpleCollection;
  selectedData : SimpleData;

  constructor() { }

  onSelect(myData : SimpleData ) {
    this.selectedData = myData;
  }

  ngOnInit() {
  }

}
