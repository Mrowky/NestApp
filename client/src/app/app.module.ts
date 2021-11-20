import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NestlistComponent } from './nestlist/nestlist.component';
import { AddingnestComponent } from './addingnest/addingnest.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { NotActiveNestlistComponent } from './notactivenestlist/notactivenestlist.component';
import { EditnestnoticeComponent } from './editnestnotice/editnestnotice.component';


@NgModule({
  declarations: [
    AppComponent,
    NestlistComponent,
    AddingnestComponent,
    NavComponent,
    AdminComponent,
    NotActiveNestlistComponent,
    EditnestnoticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
