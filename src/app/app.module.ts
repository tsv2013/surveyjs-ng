import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SurveyPage } from "./pages/survey.page";
import { SurveyComponent } from "./components/survey.component";

@NgModule({
  declarations: [
    AppComponent,
    SurveyPage,
    SurveyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
