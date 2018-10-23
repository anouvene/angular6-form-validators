import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from  './user/user.component';
import { FruitsContainerComponent } from  './fruits-container/fruits-container.component';
import { HomeComponent } from  './home/home.component';
import { ErrorComponent } from  './error/error.component';
import { RegisterComponent } from "./register/register.component";
import { RegisterBisComponent } from "./register-bis/register-bis.component";
import {TemplateDrivenFormComponent} from "./template-driven-form/template-driven-form.component";

const ROUTES: Routes = [
  { path: 'user', component: UserComponent },
  {
    path: 'register',
    component: RegisterComponent,
    children: [{ path: 'bis', component: RegisterBisComponent }]
  },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  { path: 'fruits', component: FruitsContainerComponent },
  { path: '', component: HomeComponent },
  { path: 'error404', component: ErrorComponent },
  { path: '**', redirectTo: 'error404' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
