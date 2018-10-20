import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StoryModule } from './story/story.module';
import { StoryComponent } from './story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    StoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
