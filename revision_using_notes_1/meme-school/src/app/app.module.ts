import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemesComponent } from './memes/memes.component';
import { GenerateComponent } from './memes/generate-memes/generate.component';

// For TABLES
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { UsertableComponent } from './usertable/usertable.component';
import { UserService } from './user.service';




@NgModule({
  declarations: [
    AppComponent,
    MemesComponent,
    GenerateComponent,
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
