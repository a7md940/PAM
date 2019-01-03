import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsListComponent } from './news-list/news-list.component';
import { NewDetailsComponent } from './new-details/new-details.component';

const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: ':title', component: NewDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
