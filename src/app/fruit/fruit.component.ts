import { Component, OnChanges, OnInit, AfterViewInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-fruit',
  template: `
    <h3>Fruits <ng-content></ng-content></h3> 
    <ul class="list-group">
      <li *ngFor="let fruit of fruits; let i = index" 
          class="list-group-item list-group-item-action" 
          (click)="clickFruit(i)" [appColor]="i === selectedFruitIndex"> 
          {{ fruit }}  <span *ngIf="i === selectedFruitIndex">{{ selectedFruitIndex }}</span>
      </li>
    </ul>

    <h3>Logs</h3>
    <div *ngFor="let log of changeLog">{{ log }}</div>

  `,
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
