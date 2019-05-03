import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/services/service1.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
// Para importar un servicio es necesario agregarlo aquí como provider
// Para que funcione aquí como "provider" debe ser importado en app.module.ts
  providers: [Service1Service],
})
export class Component1Component implements OnInit {
  sum = 0;
  constructor(jujo: Service1Service, public breakpointObserver: BreakpointObserver) {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    // En la próxima línea los tres puntos son el "spread operator".
    // If i take them away, the array turns into text, not numbers.
    this.sum = jujo.add(...array);
  }
  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        console.log('Xsmall');
      }
      if (result.breakpoints[Breakpoints.Small]) {
        console.log('Small');
      }
      if (result.breakpoints[Breakpoints.Medium]) {
        console.log('Medium');
      }
      if (result.breakpoints[Breakpoints.Large]) {
        console.log('Large');
      }
      if (result.breakpoints[Breakpoints.XLarge]) {
        console.log('XLarge');
      }
    });
  }
}
