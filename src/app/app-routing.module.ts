import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentScoreComponent } from './student-score/student-score.component';
import { AdmissionComponent } from './admission/admission.component';


const routes: Routes = [{
  path: 'result', component: StudentScoreComponent
}, {
  path: 'admission', component: AdmissionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
