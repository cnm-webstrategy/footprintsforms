import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpieFormComponent } from './opie-form/opie-form.component';
import { StudentComplaintFormComponent } from './student-complaint-form/student-complaint-form.component';
import { DefaultComponent } from './default.component';

const routes: Routes = [
  { path: 'opie-form.html', component: OpieFormComponent },
  { path: 'student-complaint-form.html', component: StudentComplaintFormComponent },
  { path: '', component: DefaultComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
