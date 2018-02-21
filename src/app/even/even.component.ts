import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  // @Input allows to pass data from outside to number in this component
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
