import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <form>
      <h3>Test formulaire</h3>
      <input [value]="nom"
             (input)="nom=$event.target.value">
      <div appColor>{{ nom }}</div>
      
      <input name="nom" [(ngModel)]="nom">
    </form>
  `,
  styles: [`
    h3 { color: crimson; } 
    input { text-align: center;  }
  `]
})
export class FormComponent implements OnInit {
  public nom:string;
  constructor() {  }

  ngOnInit() {
    this.nom = `What is your name ?`;
  }

}
