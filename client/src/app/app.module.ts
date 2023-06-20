import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetBookComponent } from './budget-book/budget-book.component';
import { BtnComponent } from './btn/btn.component';


@NgModule({
  declarations: [
    AppComponent,
    BudgetBookComponent,
    BtnComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
