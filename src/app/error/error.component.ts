import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <p>
      404 page not found!
    </p>
  `,
  styles: [`p {font-size: 2em; color: crimson}`]
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
