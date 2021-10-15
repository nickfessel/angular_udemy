import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // needs to be unique string
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // can reference multiple stylesheets here
  // or if it's a short list, use styles to define style here in this app.components.ts file:
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {

}
