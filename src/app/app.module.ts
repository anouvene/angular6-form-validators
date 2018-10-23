import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { ColorDirective } from './shared/directives/color.directive';
import { UserComponent } from './user/user.component';
import { FruitComponent } from './fruit/fruit.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { FruitsContainerComponent } from './fruits-container/fruits-container.component';
import { RegisterComponent } from './register/register.component';
import { RegisterBisComponent } from './register-bis/register-bis.component';
import { EmailValidatorDirective } from './shared/directives/email-validator.directive';
import { EmailGroupValidatorDirective } from './shared/directives/email-group-validator.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    UserComponent,
    FruitComponent,
    HomeComponent,
    ErrorComponent,
    FruitsContainerComponent,
    RegisterComponent,
    RegisterBisComponent,
    EmailValidatorDirective,
    EmailGroupValidatorDirective,
    TemplateDrivenFormComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
