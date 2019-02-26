import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpieFormComponent } from './opie-form/opie-form.component';
import { StudentComplaintFormComponent } from './student-complaint-form/student-complaint-form.component';

const routes: Routes = [
  { path: 'opie-form.html', component: OpieFormComponent },
  { path: 'student-complaint-form.html', component: StudentComplaintFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
