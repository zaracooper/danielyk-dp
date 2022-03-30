import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Date Time Picker</h1>
  <h3>By DanielYKPan</h3>
  <input [owlDateTime]="dt1" [owlDateTimeTrigger]="dt1" placeholder="Date Time">
  <owl-date-time #dt1></owl-date-time>
  `,
  styles: []
})
export class AppComponent {
  title = 'danielyk-dp';
}
