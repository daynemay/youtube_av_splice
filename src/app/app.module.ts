import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { VideoPairComponent } from './video-pair/video-pair.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPairComponent,
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
