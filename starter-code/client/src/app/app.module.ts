import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { EntryFormComponent } from './entry-list/entry-form/entry-form.component'
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: EntryListComponent },
  { path: 'home/:id', component: SingleEntryComponent}
 ];
@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent,
    EntryFormComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
