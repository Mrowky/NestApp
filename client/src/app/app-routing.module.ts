import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddingnestComponent } from './addingnest/addingnest.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NestlistComponent } from './nestlist/nestlist.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addingnest', component: AddingnestComponent},
  {path: 'nestlist', component: NestlistComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: AppComponent, pathMatch:'full'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
