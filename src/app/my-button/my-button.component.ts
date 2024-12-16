import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
})
export class MyButtonComponent {
  @Input()
  title: string = '';

  @Input()
  enabled: boolean = true;

  @Output()
  btnClick: EventEmitter<Event> = new EventEmitter<Event>();
}

// INPUT: App -> Button
// OUTPUT: App <- Button (Button -> App)
