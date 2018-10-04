import { Component, ViewChild, OnInit } from '@angular/core';
import { FruitComponent } from './fruit/fruit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public count: number = 0;

  @ViewChild('fruit') public fc: FruitComponent;

  ngOnInit(): void {
    this.fc.countFruits = 0;
  }


  countFruits(): number {
    return this.fc.countFruits
    // return this.count;

  }

  increase() {
    this.fc.plus();
    // this.count++;
  }

  decrease() {
    this.fc.moins();
    // this.count--;
  }

}
