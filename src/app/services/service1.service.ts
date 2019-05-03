import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  constructor(public breakpointObserver: BreakpointObserver) { }
  public add(... tato) {
    // Los "..." son un "Spread operator". It initialize arrays and objects from another array or object.
    // More info here: https://howtodoinjava.com/typescript/spread-operator/
    let jojo = 0;
    for (const pepe of tato) {
      console.log(jojo);
      jojo += pepe;
      // += (Add and Assignment) adds the right operand to the left operand and assigns the result to the left operand
      // more info https://www.tutorialspoint.com/typescript/typescript_operators.htm
    }
    return jojo;
  }

}
