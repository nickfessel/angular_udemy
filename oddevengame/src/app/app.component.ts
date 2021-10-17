import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oddevengame';
  odds = [{count: 0}];
  evens = [{count: 0}];
  onCounterIncremented(data: {count: number}) {
    if(data.count % 2 === 0) {
      this.evens.push({count: data.count});
    }
      else {
        this.odds.push({count: data.count});
      }
    }
}
