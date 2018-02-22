import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YoutubePlayerModule } from 'ngx-youtube-player';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
