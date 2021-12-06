import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddingnestComponent } from './addingnest/addingnest.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { EditnestnoticeComponent } from './editnestnotice/editnestnotice.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NestlistComponent } from './nestlist/nestlist.component';
import { NotActiveNestlistComponent } from './notactivenestlist/notactivenestlist.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: NestlistComponent },
  { path: 'addingnest', component: AddingnestComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'nestlist', component: NestlistComponent },
  { path: 'notactivenestlist', component: NotActiveNestlistComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent },
  { path: 'nestlist/editnestnotice/:id', component: EditnestnoticeComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
