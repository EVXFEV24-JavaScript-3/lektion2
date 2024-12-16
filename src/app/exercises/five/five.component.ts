import { Component } from '@angular/core';

@Component({
  selector: 'app-five',
  template: `
    <h1>{{ userName }}</h1>
    <p>Age: {{ userAge }}</p>
    <p>Email: {{ userEmail }}</p>
  `,
})
export class FiveComponent {
  userName: string = 'Ironman';
  userAge: number = 25;
  userEmail: string = 'tony@stark.com';
}
