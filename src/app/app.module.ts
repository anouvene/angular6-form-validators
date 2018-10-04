import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, /*ReactiveFormsModule*/ } from '@angular/forms';


import { AppComponent } from './app.component';
import { ColorDirective } from './shared/color.directive';
import { FormComponent } from './form/form.component';
import { FruitComponent } from './fruit/fruit.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    FormComponent,
    FruitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
