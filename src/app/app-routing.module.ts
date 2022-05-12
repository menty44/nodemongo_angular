import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {UpdateComponent} from "./update/update.component";
import {CreateComponent} from "./create/create.component";

const routes: Routes = [
  // { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'update', component: UpdateComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
