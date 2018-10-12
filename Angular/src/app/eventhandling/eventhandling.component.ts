import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'EventHandling',
  templateUrl: './eventhandling.component.html',
  styleUrls: ['./eventhandling.component.css']
})
export class EventHandlingComponent implements OnInit {

  constructor() { }

  clickMessage = '';
  values = '';
  value = '';

  onClickMe() {
    this.clickMessage = 'Hello World!';
  } 

  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }  

 onEnter(value: string) { 
   this.value = value; 
  }  

  ngOnInit() {
  }

}
