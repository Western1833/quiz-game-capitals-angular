import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentHolderComponent } from './components/content-holder/content-holder.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswersComponent } from './components/answers/answers.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentHolderComponent,
    QuestionComponent,
    AnswersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
