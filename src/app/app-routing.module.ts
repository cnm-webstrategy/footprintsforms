import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpieFormComponent } from './opie-form/opie-form.component';

const routes: Routes = [
  { path: 'opie', component: OpieFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
