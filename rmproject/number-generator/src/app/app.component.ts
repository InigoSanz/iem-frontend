import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'number-generator';

  private _number: Subject<number>;
  private _counter = 0;
  private _oddNumbers: number[];
  private _evenNumbers: number[];

  constructor() {
    this._number = new Subject<number>();
    this._oddNumbers = [];
    this._evenNumbers = [];

    setInterval(() => {
      this._number.next(this._counter++);
    }, 1500);

    this._number.subscribe((value: number) => {
      if (value % 2 !== 0) {
        this._oddNumbers.push(value);
      } else {
        this._evenNumbers.push(value);
      }

      console.log('Impares: ', this._oddNumbers);
      console.log('Pares: ', this._evenNumbers);
    });
  }
}
