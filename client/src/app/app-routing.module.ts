import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddingnestComponent } from './addingnest/addingnest.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { EditnestnoticeComponent } from './editnestnotice/editnestnotice.component';
import { NestlistComponent } from './nestlist/nestlist.component';
import { NotActiveNestlistComponent } from './notactivenestlist/notactivenestlist.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'addingnest', component: AddingnestComponent },
  { path: 'nestlist', component: NestlistComponent },
  { path: 'notactivenestlist', component: NotActiveNestlistComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'nestlist/editnestnotice/:id', component: EditnestnoticeComponent },
  { path: '**', component: AppComponent, pathMatch: 'full' } //todo not found component


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
