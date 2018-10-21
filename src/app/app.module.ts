import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { StoryModule } from './story/story.module';
import { StoryComponent } from './story/story.component';

import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
