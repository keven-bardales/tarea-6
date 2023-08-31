import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-counter',
    template: `<p>
    {{counter}}
    </p><!-- 
    <button (click)="incrementOne()">Increment</button>
    <button (click)="drecementOne()">Decrement</button> -->
    <button (click)="substractOrAddByValue(5)">Increment by 5</button>
    <button (click)="substractOrAddByValue(-5)">Decrement by 5</button>
    <button (click)="resetCounter()">Reset</button>`,
})


export class CounterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    
  public title: string = 'Mi primer componente de Angular';
  public counter: number = 10

  substractOrAddByValue(value: number):void{
    const isGreaterThenZero = this.counter + value

    if(isGreaterThenZero >= 0){
      this.counter = isGreaterThenZero
    }
  }

  resetCounter (): void{
    this.counter = 10
  }
}