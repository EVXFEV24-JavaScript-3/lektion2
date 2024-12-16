import { Component } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css'],
})
export class FourComponent {
  // Datatyp saknades här (title)
  title: string = 'Welcome Page';
  subtitle: string = 'Hello there';
}
