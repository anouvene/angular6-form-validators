import { Component, OnChanges, OnInit, AfterViewInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styles: [`ul { list-style: none; margin: 0; padding: 0; }`]
})
export class FruitComponent implements OnChanges, OnInit {
  public fruits: string[] = ['Pommes', 'Poires', 'Cerises', 'Ananas', 'Fraises'];
  public selectedFruitIndex: number;

  public changeLog: string[] = [];

  @Input() countFruits: number;

  constructor() {  }

  ngOnInit() {
    // this.fruits = ['Pommes', 'Poires', 'Cerises', 'Ananas', 'Fraises'];
    // this.countFruits += this.fruits.length;
  }

  clickFruit(index: number): void {
    this.selectedFruitIndex = index;
  }

  plus() {
    this.countFruits++;
  }

  moins() {
    this.countFruits--;
  }


  ngOnChanges (changes: {[propName: string]: SimpleChange}) {
    let log: string[] = [];
    for(let propName in changes) {
      let changedProp = changes[propName];
      let from = JSON.stringify(changedProp.previousValue);
      let to = JSON.stringify(changedProp.currentValue);

      log.push(`${propName} changed from ${JSON.stringify(changedProp.previousValue)} to ${to}`)
    }

    this.changeLog.push(log.join(','));

  }


}
