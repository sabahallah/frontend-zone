import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntervalComponent } from './interval/interval.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
{path: 'interval', component: IntervalComponent},
{path: 'custom-observable', component: CustomObservableComponent},
{path: 'subject', component: SubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
