import { Component, OnInit } from '@angular/core';

// useEffect

/*
{
  "quotes": [
    {
        "id": 1,
        "quote": "Life isn't about getting and having, it's about giving and being.",
        "author": "Kevin Kruse"
    },
    {
        "id": 2,
        "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
        "author": "Napoleon Hill"
    },
    {
        "id": 3,
        "quote": "Strive not to be a success, but rather to be of value.",
        "author": "Albert Einstein"
    },
    {...},
    {...}
    // 30 items
  ],
  "total": 100,
  "skip": 0,
  "limit": 30
}

*/

interface DummyJsonQuotes {
  total: number;
  skip: number;
  // Man kan ignorera fält om man vill
  // limit: number;
  quotes: DummyJsonSingleQuote[];
}

interface DummyJsonSingleQuote {
  id: number;
  quote: string;
  author: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  quotes: DummyJsonSingleQuote[] = [];
  exampleButtonTitle: string = 'Title from app';

  // En metod är en funktion som ligger innanför en klass.

  ngOnInit(): void {
    // Hämta citat från DummyJSON
    fetch('https://dummyjson.com/quotes')
      .then((res) => res.json())
      .then((res: DummyJsonQuotes) => {
        this.quotes = res.quotes;
      });
  }

  onDeleteQuote(quote: DummyJsonSingleQuote): void {
    this.quotes = this.quotes.filter((all) => quote !== all);
  }

  onInputChange(event: Event): void {
    const inputEvent = event as InputEvent;
    const inputElement = inputEvent.target as HTMLInputElement;
    console.log(inputElement.value);
  }

  alertOnClick(): void {
    alert('Hej från app!');
  }
}
