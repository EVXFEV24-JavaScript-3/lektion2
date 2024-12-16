import { Component } from '@angular/core';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.css'],
})
export class SevenComponent {
  languages: string[] = [
    'JavaScript',
    'TypeScript',
    'Java',
    'C#',
    'C++',
    'Rust',
    'Go',
  ];
}