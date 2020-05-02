import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemesComponent } from './memes/memes.component';
import { GenerateComponent } from './memes/generate-memes/generate.component';

@NgModule({
  declarations: [
    AppComponent,
    MemesComponent,
    GenerateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
