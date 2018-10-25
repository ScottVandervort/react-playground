import { Component, OnInit } from '@angular/core';
import { SimpleAjaxService } from '../simpleajax.service'
import { SimpleAjaxModel } from '../simpleajaxmodel';

@Component({
  selector: 'SimpleAjax',
  templateUrl: './simpleajax.component.html',
  styleUrls: ['./simpleajax.component.css']
})
export class SimpleAjaxComponent implements OnInit {

  myCollection : SimpleAjaxModel [];

  constructor( private simpleAjaxService: SimpleAjaxService ) { }

  ngOnInit() {
      this.simpleAjaxService.test().subscribe( data => { this.myCollection = data });
  }
}
