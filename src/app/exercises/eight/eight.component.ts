import { Component } from '@angular/core';

// PascalCase
class Country {
  name: string;
  continent: string;
  population: number;

  constructor(name: string, continent: string, population: number) {
    this.name = name;
    this.continent = continent;
    this.population = population;
  }
}

@Component({
  selector: 'app-eight',
  templateUrl: './eight.component.html',
  styleUrls: ['./eight.component.css'],
})
export class EightComponent {
  countries: Country[] = [
    new Country('France', 'Europe', 64766868),
    new Country('Sweden', 'Europe', 10617537),
    new Country('Japan', 'Asia', 123235518),
    new Country('China', 'Asia', 1425627628),
    new Country('Spain', 'Europe', 47515521),
    new Country('Brazil', 'South America', 216529995),
    new Country('Canada', 'North America', 38810093),
  ];
}
