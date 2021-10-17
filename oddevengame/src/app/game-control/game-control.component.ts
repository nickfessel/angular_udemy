import { NumberSymbol } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() counterIncremented = new EventEmitter<{ count: number }>();

  counter: number = 0;
  timer: any;

  constructor() { }

  ngOnInit(): void {
  }

  onGameStarted() {
    this.timer = setInterval(() => {
      this.counter += 1;
      this.counterIncremented.emit({ count: this.counter });
    }, 1000);
  }

  onGameStopped() {
    clearInterval(this.timer);
  }
}
