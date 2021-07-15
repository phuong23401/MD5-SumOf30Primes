import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flow-loop',
  templateUrl: './flow-loop.component.html',
  styleUrls: ['./flow-loop.component.css']
})
export class FlowLoopComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  public getSum(): number {
    let sum : number = 0;
    let count : number = 0;

    for (let i = 0; count < 30; i++) {
      let isPrime: boolean = true;
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if(!isPrime){
        continue;
    }
    sum += i;
    count++;
    }
    return sum;
  }
  total : number = this.getSum();
}
