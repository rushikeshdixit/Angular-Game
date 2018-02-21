import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Time } from '@angular/common';
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // @Output makes this event available to listen outside this component 
  @Output() eventFired = new EventEmitter<number>();
  count = 0
  ref : any
  constructor() { }

  ngOnInit() {
  }

  counter(){
    this.ref = setInterval(() => {
      this.eventFired.emit(this.count + 1);
      this.count++;
    }, 1000);
  }

  clearCounter(){
    if(this.ref)
    clearInterval(this.ref);
  }
}

