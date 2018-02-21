import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];
  onEventFired(firedCount: number){
    if(firedCount%2===0){
      this.evenNumbers.push(firedCount);
    }
    else{
      this.oddNumbers.push(firedCount);
    }
  }

}
