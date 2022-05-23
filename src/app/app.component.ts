import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  
  panel1:any = null;
  input1:any;
  input2:any;
  symbol:any;
  num1!: number;
  num2!: number;
  addition:any;
  addclick:boolean = false;
  number1(event: any){
    this.num1 = event.target.value; 
  }
  number2(event: any){
    this.num2 = event.target.value; 
  }
  add(){
    debugger;
    this.addclick = true;
    this.addition = this.num1+this.num2;
  }

  total(){
    debugger;
    if(this.addclick == true){
      this.panel1 = this.addition;
    }
    console.log(this.addition);
  }
  reset(){
    this.panel1="";
  }

  restrict(event: any) {
    let code = event.key.charCodeAt(0);
    if ((code >= 48 && code <= 57) || (code >= 96 && code <= 110)) { }
    else {
      event.preventDefault();
      return;
    }
  }


}
