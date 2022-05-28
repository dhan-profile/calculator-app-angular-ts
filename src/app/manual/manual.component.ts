import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {
add1!: number;
add2!: number;
sub1!: number;
sub2!: number;
multi1!: number;
multi2!: number;
div1!: number;
div2!: number;
mod1!: number;
mod2!: number;
addResult: number = 0;
subResult: number = 0;
multiResult: number = 0;
divResult: number = 0;
modResult: number = 0;
constructor() { }

ngOnInit(): void {
  }
  
  add(){
    this.addResult = +this.add1 + +this.add2;
    return this.addResult;
  }
  sub(){
    this.subResult = +this.sub1 - +this.sub2;
    return this.subResult;
  }
  multi(){
    this.multiResult = +this.multi1 * +this.multi2;
    return this.multiResult;
  }
  div(){
    this.divResult = +this.div1 / +this.div2;
    return this.divResult;
  }
  mod(){
    this.modResult = +this.mod1 % +this.mod2;
    return this.modResult;
  }
  reset(){
    this.add1 = 0;
    this.add2 = 0;
    this.sub1 = 0;
    this.sub2 = 0;
    this.multi1 = 0;
    this.multi2 = 0;
    this.div1 = 0;
    this.div2 = 0;
    this.mod1 = 0;
    this.mod2 = 0;
    this.addResult = 0
    this.subResult = 0
    this.multiResult = 0
    this.divResult = 0
    this.modResult = 0
  }
}
